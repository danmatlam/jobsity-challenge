import {takeLatest} from 'redux-saga/effects';
import {
    GET_REMINDERS,
    SAVE_REMINDER,
    DELETE_REMINDER_LIST
} from '../dao-actions'


import {getRemindersSagas,saveReminderSaga, deleteReminderList} from './reminderSagas';

export function * watcherSaga(){
    yield takeLatest(GET_REMINDERS, getRemindersSagas);
    yield takeLatest(SAVE_REMINDER, saveReminderSaga);
    yield takeLatest(DELETE_REMINDER_LIST,deleteReminderList)

}


