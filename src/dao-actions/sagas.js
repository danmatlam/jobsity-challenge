import {takeLatest} from 'redux-saga/effects';
import {
    GET_REMINDERS,
    SAVE_REMINDER,
} from '../dao-actions'


import {getRemindersSagas,saveReminderSaga} from './reminderSagas';

export function * watcherSaga(){
    yield takeLatest(GET_REMINDERS, getRemindersSagas);
    yield takeLatest(SAVE_REMINDER, saveReminderSaga);

}


