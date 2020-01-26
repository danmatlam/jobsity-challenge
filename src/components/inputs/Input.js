import React from 'react'
import TextField from '@material-ui/core/TextField';

export default function Input({
    label,
    focus,
    type,
    onChange,
    helperText,
    multiline,
    value,
    error
}, props) {
 
    return (


            <TextField
                rows="4"
                multiline={multiline}
                label={label}
                autoFocus={focus}
                type={type}
                margin="normal"
                helperText={helperText}
                onChange={onChange}
                value={value}
                fullWidth
                style={{marginBottom:'1.8em'}}
                error={error}

            />



    )
}
