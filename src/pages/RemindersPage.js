import React, { useEffect } from 'react';
import BigCalendar from '../components/BigCalendar'
import { connect } from 'react-redux';
import { GET_REMINDERS, SAVE_REMINDER } from '../dao-actions/';
import styled from 'styled-components';


import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { RemindersForm } from '../components/RemindersForm';
import { Reminders } from '../components/Reminders';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));


const RemindersPage = ({
    getReminders,
    saveReminders,
    remindersState
}) => {
    const classes = useStyles();

    useEffect(() => { getReminders() }, [])
    return (
        <Grid container>
            <Grid item xs={8}
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                }}
            >
                <BigCalendar />

            </Grid>
            <Grid item xs={4}>
            
                <Reminders></Reminders>
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
        saveReminders: payload => dispatch({ type: SAVE_REMINDER, payload })
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RemindersPage);
