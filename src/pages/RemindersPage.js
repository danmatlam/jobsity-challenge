import React, { useEffect } from 'react';
import BigCalendar from '../components/BigCalendar'
import { connect } from 'react-redux';
import { GET_REMINDERS, SAVE_REMINDER, DELETE_REMINDER_LIST } from '../dao-actions/';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Reminders } from '../components/Reminders';
import moment from 'moment';
import WeatherIcon from 'react-icons-weather';



const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        Gridor: theme.palette.text.secondary,
    },
}));


const RemindersPage = ({
    getReminders,
    remindersState,
    saveReminders,
    deleteReminderList
}) => {
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = React.useState(null);
    const onSelected = (selected) => {
        const dateJs = new Date(selected);
        const dateMoment = moment(dateJs);
        setSelectedDate(dateMoment);
    }
    useEffect(()=> { getReminders() }, [])
    return (
        <Grid container>

            <Grid item xs={12} sm={8} md={8} lg={8} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', overflowX: 'auto' }}>
                
  

                <BigCalendar onSelected={onSelected} />
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', overflowX: 'auto' }}>
                <Reminders 
                    selectedDate={selectedDate}
                    remindersState={remindersState}
                    saveReminders={saveReminders}
                    deleteReminderList={deleteReminderList}
                 />
            </Grid>

        </Grid>

    )
}





const mapStateToProps = ({ remindersState }) => {
    return {
        remindersState
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getReminders: () => dispatch({ type: GET_REMINDERS }),
        saveReminders: payload => dispatch({ type: SAVE_REMINDER, payload }),
        deleteReminderList: payload => dispatch({ type: DELETE_REMINDER_LIST, payload })
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RemindersPage);
