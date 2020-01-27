
import {
    GET_REMINDERS,
    GET_REMINDERS_SUCCESS,
    GET_REMINDERS_ERROR,

    SAVE_REMINDER,
    SAVE_REMINDER_SUCCESS,
    SAVE_REMINDER_ERROR,

    SHOW_FEEDBACK,
    CLOSE_FEEDBACK,
    DELETE_REMINDER_SUCCESS,

    DELETE_REMINDER_LIST_SUCCESS,
    DELETE_REMINDER_LIST_ERROR
} from '../dao-actions'

const init = {
    reminders: [],
    loadingList: false,
    errorList: false,

    reminder: {},
    loading: false,
    error: false,
}


const reminderReducer = (state = init, action) => {
    switch (action.type) {
        case GET_REMINDERS: return {
            ...state,
            loadingList: true,
        }
        case GET_REMINDERS_SUCCESS: return {
            ...state,
            loadingList: false,
            reminders: action.payload
        }
        case GET_REMINDERS_ERROR: return {
            ...state,
            loadingList: false,
            errorList: action.error
        }
        case SAVE_REMINDER: return {
            ...state,
            loading: true,
        }
        case SAVE_REMINDER_SUCCESS:
            return !action.payload.idReminder ?
                {
                    ...state,
                    reminders: [
                        ...state.reminders,
                        { 
                            ...action.payload, 
                            idReminder: state.reminders.length +1
                        }
                    ],
                    loading: false,
                }
                : {
                    ...state,
                    reminders: replaceRemidner(state.reminders, action.payload),
                    loading: false,
                }
        case SAVE_REMINDER_ERROR: return {
            ...state,
            loading: false,
            error: action.error
        }
        case DELETE_REMINDER_SUCCESS: return {
            ...state,
            reminders: deleteReminder(state.reminders, action.payload),
            loading: false,
        }
        case SAVE_REMINDER_ERROR: return {
            ...state,
            loading: false,
            error: action.error
        }
        case DELETE_REMINDER_LIST_SUCCESS: 
        return {
            ...state,
            reminders: deleteReminderList(state.reminders, action.payload),
            loading: false,
        }
        case DELETE_REMINDER_LIST_ERROR: return {
            ...state,
            loading: false,
            error: action.error
        }
        default: return state;
    }
}


const replaceRemidner = (reminders, reminder) => {
    const i = reminders.findIndex(item => item.idReminder === reminder.idReminder);
    reminders[i] = reminder;
    return reminders;
};

const deleteReminder = (reminders, reminder) => {
    const i = reminders.findIndex(item => item.idReminder === reminder.idReminder);
    reminders.splice(i,1);
    return reminders;
};



const deleteReminderList = (reminders, remindersDelete) => {
    var result = reminders.filter(el => !remindersDelete.includes(el));
    console.log(result);
    return result;

};


export default reminderReducer