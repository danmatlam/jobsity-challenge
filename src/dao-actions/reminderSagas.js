import { call, put } from "redux-saga/effects";
import moment from "moment";
import axios from 'axios';
import {
    SAVE_REMINDER_SUCCESS,
    SAVE_REMINDER_ERROR,
    GET_REMINDERS_SUCCESS,
    GET_REMINDERS_ERROR,

    DELETE_REMINDER_SUCCESS,
    DELETE_REMINDER_ERROR,
    DELETE_REMINDER_LIST_SUCCESS,
    DELETE_REMINDER_LIST_ERROR

} from './index';
import { transformWeather, transformForeCast, filterForecast } from "../helpers/transformWeather";

const reminders = [
    {
        idReminder: 1,
        reminder: 'This should be late',
        country: 'Ecuador',
        city: 'Guayaquil',
        date: {
            day: '2020/01/03',
            time: '23:45'
        },
        color: '#a069f3'
    },

]


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
            payload:[]
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

    if (action.payload.delete) {
        try {
            yield put({
                type: DELETE_REMINDER_SUCCESS,
                payload: action.payload
            });
        }
        catch{
            yield put({
                type: SAVE_REMINDER_ERROR,
                error: 'Oops paso algo',
            });
        }
        return;
    }


    const payload = action.payload;

    /// HOUR PARSING
    const dateJs = new Date(payload.hour);
    const selectedHour = moment(dateJs).format('HH:mm');


    //GET FORECAST OPEN WEATHER MAP
    let weatherData = yield call(getWeather, { city: payload.city, country: payload.country });
    weatherData = weatherData.data.cod == 200 && transformWeather(weatherData.data);

    //GET FORECAST OPEN WEATHER MAP
    let foreCastData = yield call(getForecast, { city: payload.city, country: payload.country });
    foreCastData = foreCastData.data.cod == 200 && transformForeCast(foreCastData.data);

    const foreCastOnday = filterForecast(
        foreCastData,
        payload.selectedDate.format('YYYY/MM/DD'),
        selectedHour
    );
    const auxPayload = {
        idReminder: payload.idReminder || null,
        reminder: payload.reminder,
        country: payload.country,
        city: payload.city,
        date: {
            day:payload.selectedDate.format('YYYY/MM/DD'),
            time: selectedHour,
        },
        color: payload.color,
        forecast: foreCastOnday[0] && foreCastOnday[0]
    };

    debugger;
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

export function* deleteReminderList(action) {

    try {
        yield put({
            type: DELETE_REMINDER_LIST_SUCCESS,
            payload: action.payload
        });
    }
    catch{
        yield put({
            type: DELETE_REMINDER_LIST_ERROR,
            error: 'Oops paso algo',
        });
    }

}