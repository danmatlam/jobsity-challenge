import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';

export default function MaterialUIPickers({ label, value, onChange }) {
    // The first commit of Material-UI


    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>

            <KeyboardTimePicker
                label={label}
                value={value}
                onChange={onChange}
                KeyboardButtonProps={{
                    'aria-label': 'change time',
                }}
                fullWidth
            />

        </MuiPickersUtilsProvider>
    );
}