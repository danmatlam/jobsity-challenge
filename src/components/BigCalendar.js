import 'date-fns';
import React from 'react';
import styled from 'styled-components';
import { DatePicker } from '@material-ui/pickers';
import moment from 'moment';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { Box } from '@material-ui/core';
import BigCalendarDay from './BigCalendarDay';



const RenderDay = (day, selectedDate, dayInCurrentMonth, dayComponent) => {
  const dateObj = new Date(day);
  const momentObj = moment(dateObj);
  return (
  <BigCalendarDay 
  date={momentObj}/>
  )
}


const BigCalendar = ({reminders, onSelected }) => {
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  
  const handleDateChange = date => {
    setSelectedDate(date);
    onSelected(date);
    
  };


  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} >
      <Wrapper>
        <DatePicker
          variant="static"
          autoOk
          orientation="landscape"
          disableToolbar
          format="dd/MM/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          renderDay={RenderDay}

        />
      </Wrapper>


    </MuiPickersUtilsProvider>
  )
}



const Wrapper = styled.div`
  zoom: 2.7;
`;






export default BigCalendar;