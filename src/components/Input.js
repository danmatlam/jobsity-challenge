import React from 'react'
import TextField from '@material-ui/core/TextField';

export default function Input(props) {
    const {
        label,
        focus,
        type,
        onChange,
        helperText,
        multiline,
        value
    } = props;

    return (

        <div>
            <TextField
                multiline={multiline}
                rows="4"
                label={label}
                autoFocus={focus}
                type={type}
                fullWidth
                margin="normal"
                helperText={helperText}
                onChange={onChange}
                value={value}
            />

        </div>

    )
}
