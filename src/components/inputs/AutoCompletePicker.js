/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';


export const AutoCompletePicker = ({ onChange,options, label, inputValue }) => {
    return (
        <div style={{ margin: '.9em 0 .9em 0' }}>
            <Autocomplete
                onChange={onChange}
                options={options}
                getOptionLabel={option => option.title}
                style={{ width: 300 }}
                renderInput={params => (
                    <TextField {...params} label={label} variant="outlined" fullWidth />
                )}

                inputValue={inputValue}
            />
        </div>

    )
}


