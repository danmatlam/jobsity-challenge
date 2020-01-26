import { call, put } from "redux-saga/effects";
import moment from "moment";
import axios from 'axios';
import {
    SAVE_REMINDER_SUCCESS,
    SAVE_REMINDER_ERROR,
    GET_REMINDERS_SUCCESS,
    GET_REMINDERS_ERROR,
} from './index';
import { transformWeather, transformForeCast, filterForecast } from "../helpers/transformWeather";

const reminders = [
    {
        idReminder: '01',
        reminder: 'Jobsity Challenge',
        city: 'Guayaquil',
        date: {
            day: '2020/01/24',
            time: '00:00',

        },
        color: 'red',
    },
    {
        idReminder: '02',
        reminder: 'Jobsity Challenge',
        city: 'Guayaquil',
        date: {
            day: '2020/01/25',
            time: '00:00',

        },
        color: 'red',
    },
    {
        idReminder: '03',
        reminder: 'Jobsity Challenge',
        city: 'Guayaquil',
        date: {
            day: '2020/01/25',
            time: '00:00',

        },
        color: 'red',
    },
    {
        idReminder: '04',
        reminder: 'Cine with girlfirend',
        city: 'Guayaquil',
        date: {
            day: '2020/01/25',
            time: '00:00',

        },
        color: 'red',
    },
    {
        idReminder: '05',
        reminder: 'Crossffit',
        city: 'Guayaquil',
        date: {
            day: '2020/01/25',
            time: '00:00',

        },
        color: 'red',
    },
    {
        idReminder: '06',
        reminder: 'Make dinner',
        city: 'Guayaquil',
        date: {
            day: '2020/01/25',
            time: '00:00',

        },
        color: 'red',
    },
    {
        idReminder: '07',
        reminder: 'Go Sleep',
        city: 'Guayaquil',
        date: {
            day: '2020/01/25',
            time: '00:00',

        },
        color: 'red',
    },
];



const getWeather = ({ city, country }) => {
    return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=67621edb94d7a57a0f4bbdc93df84cc4&units=metric`);
}

const getForecast = ({ city, country }) => {
    return axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&APPID=67621edb94d7a57a0f4bbdc93df84cc4&units=metric`);
}



export function* getRemindersSagas(action) {
    try {
        const payload = reminders;
        yield put({
            type: GET_REMINDERS_SUCCESS,
            payload
        });
    }
    catch{

        yield put({
            type: GET_REMINDERS_ERROR,
            error: 'Oops paso algo'
        });
    }
}


export function* saveReminderSaga(action) {

    const payload = action.payload;

    /// HOUR PARSING
    const dateJs = new Date(payload.hour);
    const dateMoment = moment(dateJs);
    const selectedHour = dateMoment.format('HH:MM');

    // DAY PARSING 
    const selectedDate =payload.selectedDate.format('YYYY/MM/DD');


    //GET WEATHER OWM
    let weatherData = yield call(getWeather, { city: payload.city, country: payload.country });
    weatherData = weatherData.data.cod == 200 && transformWeather(weatherData.data);

    //GET FORECAST OWM
    let foreCastData = yield call(getForecast, { city: payload.city, country: payload.country });
        foreCastData = foreCastData.data.cod == 200 && transformForeCast(foreCastData.data);


    const foreCastOnday = filterForecast(foreCastData, selectedDate, selectedHour);

    const auxPayload ={
        idReminder: 'xx',
        reminder: payload.reminder,
        city: payload.city,
        date: {
            day: selectedDate,
            time: selectedHour,
        },
        color: payload.color,
        forecast: foreCastOnday[0] && foreCastOnday[0]
    };
    
    

    try {
        yield put({
            type: SAVE_REMINDER_SUCCESS,
            payload: auxPayload
        });
    }
    catch{
        yield put({
            type: SAVE_REMINDER_ERROR,
            error: 'Oops paso algo',
        });
    }
}