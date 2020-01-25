

import Input from './Input';
import React, { useState } from 'react';
// reminder:'Cine with girlfirend',


// day:'2020/01/29',
// city:'Guayaquil',
// time:'00:00',
// color:'red',



export const RemindersForm = () => {
    const [reminder, setReminder] = useState('');




    return (
        <form noValidate >
            <Input label="Reminder"
                fullWidth
                multiline
                type="text"
                focus
                value={reminder}
                onChange={e => setReminder(e.target.value)}
            />

        </form>
    )
}


