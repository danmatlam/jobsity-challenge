
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

    const [idReminder, setIdReminder] = useState(props.idReminder || null);
    const [reminder, setReminder] = useState(props.reminder || null);
    const [hour, setHour] = useState( props.date ? moment(`${props.date.day} ${props.date.time}`, 'YYYY/MM/DD HH:mm') :null);
    const [country, setCountry] = useState(props.country || null);
    const [city, setCity] = useState(props.city || null);
    const [color, setColor] = useState(props.color || null);



    //ZONE USE
    const [countryObj, setCountryObj] = useState(null);
    const [cityObj, setCityObj] = useState(null);
    // END ZONE USE

    /// Submit Form
    const handleSubmit = e => {
        e.preventDefault();
        const payload = {
            idReminder, reminder, hour, country, city, color,
            //
            selectedDate: props.selectedDate,
            countryObj,
            cityObj,
        };

        props.handleClose();
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
        setHour(new Date(date));
    };

    const handleCountryChange = (event, value) => {
        setCountry(value && value.name ? value.name : null);
        setCountryObj(value ? value : null);
    }


    const handleCityChange = (event, value) => {
        setCity(value && value.name ? value.name : null);
        setCityObj(value ? value : null);
    }

    const handleColorChange = (value)=>{
            setColor(value)
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
            noValidate style={{ padding: '2em', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

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
                onChange={handleColorChange}
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
                inputValue={city}
                onChange={handleCityChange}

            />


            <Button variant="contained" color="primary" type='submit'>
                Guardar
</Button>



        </form>
    )
}

export default RemindersForm
