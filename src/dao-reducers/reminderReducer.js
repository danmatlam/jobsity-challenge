
import {
    GET_REMINDERS,
    GET_REMINDERS_SUCCESS,
    GET_REMINDERS_ERROR,

    SAVE_REMINDER,
    SAVE_REMINDER_SUCCESS,
    SAVE_REMINDER_ERROR,

    SHOW_FEEDBACK,
    CLOSE_FEEDBACK
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
            loadingList:true,
        }
        case GET_REMINDERS_SUCCESS: 
        return {
            ...state,
            loadingList:false,
            reminders:action.payload
        }
        case GET_REMINDERS_ERROR: return{
            ...state,
            loadingList:false,
            errorList: action.error
        }




            case SAVE_REMINDER: return{
                ...state, 
                loading:true,
            }
            case SAVE_REMINDER_SUCCESS: 
            debugger
            return {
              ...state,
              reminders:[...state.reminders, action.payload],
              loading:false,
            }

            
            case SAVE_REMINDER_ERROR: return{
                ...state,
                loading:false,
                error: action.error
            }

            default: return state;

    }
}


export default reminderReducer