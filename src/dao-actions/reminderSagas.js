import { call, put } from "redux-saga/effects";
import{
 SAVE_REMINDER_SUCCESS,
 SAVE_REMINDER_ERROR,
 GET_REMINDERS_SUCCESS,
 GET_REMINDERS_ERROR,
} from './index';

const reminders =[
    {
        idReminder:'01',
        reminder:'Cine with girlfirend',
        city:'Guayaquil',
        day:'2019/01/27',
        time:'00:00',
        color:'red',
    },
    {
        idReminder:'01',
        reminder:'Cine with girlfirend',
        city:'Guayaquil',
        day:'2019/01/28',
        time:'00:00',
        color:'red',
    },
    {
        idReminder:'01',
        reminder:'Cine with girlfirend',
        city:'Guayaquil',
        day:'2019/01/29',
        time:'00:00',
        color:'red',
    },
];


export function * getRemindersSagas(action){
    try{
        const payload = reminders;
        yield put ({
            type: GET_REMINDERS_SUCCESS, 
            payload
        });
    }
    catch{

        yield put ({
            type: GET_REMINDERS_ERROR, 
            error: 'Oops paso algo'
        });
    }
}


export function * saveReminderSaga(action){
    try{
        const payload = reminders.push(action.payload);
        yield put ({
            type: SAVE_REMINDER_SUCCESS, 
            payload
        });
    }
    catch{
        yield put ({
            type: SAVE_REMINDER_ERROR, 
            error: 'Oops paso algo',
        });
    }
}