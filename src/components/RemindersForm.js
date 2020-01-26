
import React, { useState, useEffect } from 'react';

import Input from './inputs/Input';
import TimePicker from './inputs/TimePicker';
import ColorPicker from './inputs/ColorPicker';
import moment from 'moment'
import csc from 'country-state-city'
import { ICountry, IState, ICity } from 'country-state-city'
import { AutoCompletePicker } from './inputs/AutoCompletePicker';
import axios from 'axios';
import { Button } from '@material-ui/core';



const RemindersForm = (props) => {

    const [reminderLength, setReminderLength] = useState(0);

    const [reminder, setReminder] = useState('');
    const [hour, setHour] = useState(new Date);
    const [country, setCountry] = useState(null);
    const [city, setCity] = useState(null);
    const [color, setColor] = useState(null);



    //ZONE USE
    const [countryObj, setCountryObj] = useState(null);
    const [cityObj, setCityObj] = useState(null);
    // END ZONE USE

    /// Submit Form
    const handleSubmit = e => {
        e.preventDefault();
        const payload = {
            reminder, 
            hour, 
            country, 
            city,
            color,

            selectedDate:props.selectedDate,
            countryObj,
            cityObj,
        };

        props.handleSubmit(payload)
     
    };

    ///

    const handleReminderChange = reminder => {
        setReminderLength(reminder.length);
        if (reminder.length < 31) {
            setReminder(reminder);
        }
    };

    const handleHourChange = date => {
        setHour(hour);
    };

    const handleCountryChange = (event, value) => {
        setCountry(value && value.sortname ? value.sortname : null);
        setCountryObj(value ? value : null);
    }


    const handleCityChange = (event, value) => {
        setCity(value && value.name ? value.name : null);
        setCityObj(value ? value : null);
    }

 


    //ZONE OPTIONS
    const countryOptions = csc.getAllCountries().map(item => ({
        ...item,
        title: item.name
    }));

    let citiesOptions = [];
    if (countryObj) {
        let citiesArray = [];
        const statesArray = countryObj && csc.getStatesOfCountry(countryObj.id);
        for (let i = 0; i < statesArray.length; i++) {
            let cities = csc.getCitiesOfState(statesArray[i].id);
            citiesArray = [...citiesArray, ...cities];
        }
        citiesOptions = citiesArray.map(item => ({
            ...item,
            title: item.name
        }));
        citiesOptions = citiesOptions.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));

    }

    return (
        <form 
        onSubmit={handleSubmit}
        noValidate style={{ padding: '2em', display:'flex', flexDirection:'column', alignItems:'center'}}>


            <Input
                label="Reminder"
                type="text"
                focus
                value={reminder}
                onChange={e => handleReminderChange(e.target.value)}
                helperText={`${reminderLength}/30`}
                error={reminderLength == 31}

            />
            <TimePicker
                label="Remind me at"
                value={hour}
                onChange={handleHourChange}
            />

            <ColorPicker 
                onChange={setColor}
            />

            <AutoCompletePicker
                label='Country'
                options={countryOptions}
                inputValue={country}
                onChange={handleCountryChange}
            />


            <AutoCompletePicker
                label='City'
                options={citiesOptions && citiesOptions}
                inputValue=''
                onChange={handleCityChange}

            />


<Button variant="contained" color="primary" type='submit'>
  Guardar
</Button>



        </form>
    )
}

export default RemindersForm
