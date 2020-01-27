import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { GET_REMINDERS, SAVE_REMINDER } from '../dao-actions/';
import styled from 'styled-components';

const BigCalendarDay = ({
    getReminders,
    saveReminders,
    remindersState,
    //
    date
}) => {


    const { reminders } = remindersState;

    let remindersOnDay =  reminders && reminders.filter(item => item.date.day === date.format('YYYY/MM/DD'));
    remindersOnDay = remindersOnDay && remindersOnDay.sort((a, b) => (a.date.time > b.date.time) ? 1 : ((b.date.time > a.date.time) ? -1 : 0));


    return (
        <DayView>
            <DayText>{date.format('DD')}</DayText>
            <RemindersBox>
                {
                    remindersOnDay.map(item =>
                        <ReminderItemBox key={item.idReminder} color={item.color}>
                            <ReminderItemText>
                                {item.reminder}
                            </ReminderItemText>
                        </ReminderItemBox>

                    )
                }
            </RemindersBox>
        </DayView>
    )
}




/// COMPONENTS
const DayView = styled.div`
  margin:.09em;
  border-radius:.09em;
  display:flex;
  flex-direction:column;
  height:2.7em;
  width:2.7em;
  background-color:#F8F8F8
`;


const DayText = styled.span`
  font-size:.45em;
`;
const RemindersBox = styled.div`
    border-radius:.09em;
    display:flex;
    flex-direction:column;
    overflow-y: scroll;
`;


const ReminderItemBox = styled.div`
    margin:.06em;
    background-color:${props=>props.color};

`;

const ReminderItemText = styled.div`
    font-size:.33em;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;




/// CONNECT STORE


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
)(BigCalendarDay);
