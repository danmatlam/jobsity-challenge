import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { GET_REMINDERS, SAVE_REMINDER } from '../dao-actions';

const RemindersPage = ({
    getReminders,
    saveReminders,
    remindersState
}) => {

    useEffect(() => {
        getReminders()
    }, []
    )
    return (
        <div>

        </div>
    )
}



const mapStateToProps = ({ remindersState }) => {
    return remindersState;
}

const mapDispatchToProps = dispatch => {
    return {
        getReminders: () => dispatch({ type: GET_REMINDERS }),
        saveReminders: payload => dispatch({ type: SAVE_REMINDER, payload })
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RemindersPage);
