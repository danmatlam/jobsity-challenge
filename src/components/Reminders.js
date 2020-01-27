import React from 'react';
import styled from 'styled-components';
import EditAttributes from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';
import ArrowBackIos from '@material-ui/icons/Schedule';
import AddIcon from '@material-ui/icons/Create';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import { EnvelopeLayout } from './layouts/Envelope';
import RemindersForm from './RemindersForm';
import moment from 'moment';
import { ButtonBase } from '@material-ui/core';
import WeatherComponent from './WeatherComponent';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    position: 'relative',
    minHeight: 200,
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },

}));


export const Reminders = ({
  remindersState,
  selectedDate,
  saveReminders,
  deleteReminderList
}) => {

  const classes = useStyles();

  const { reminders, loadingList, errorList } = remindersState;

  const [selectedReminder, setSelectedReminder] = React.useState(null);


  var minutesOfDay = function (m) {
    return m.minutes() + m.hours() * 60;
  }
  let remindersOnDay = reminders && selectedDate ? reminders.filter(item => item.date.day === selectedDate.format('YYYY/MM/DD')) : null;
  remindersOnDay = remindersOnDay && remindersOnDay.sort((a, b) => (a.date.time > b.date.time) ? 1 : ((b.date.time > a.date.time) ? -1 : 0));


  const [edit, setEdit] = React.useState(false);


  const hanldeCreate = (aux) => {
    if (selectedDate && aux) {
      setSelectedReminder(null);
      setEdit(true)
    } else {
      setEdit(false)
    }
  };
  const handleClose = () => {
    setEdit(false)
  }

  const handleEdit = reminder => {
    setSelectedReminder(reminder);
    setEdit(true);
  }





  return (
    <>
      <EnvelopeLayout>
        <div>
   

          {!edit ? (
            <List>
              <ListItem >
                <ListItemText style={{ fontSize: '1.5em', fontWeight: 500 }}> {selectedDate && selectedDate.format('DD/MM/YYYY')} </ListItemText>

                {
                  remindersOnDay && remindersOnDay.length > 0 &&
                    <ButtonBase
                      onClick={() => deleteReminderList(remindersOnDay)}
                      style={{ fontSize: '1.2em', margin: '.9em', borderRadius: '25px' }}
                    >
                      Detelet all
                  </ButtonBase> 

                }


              </ListItem>
              {
                remindersOnDay && remindersOnDay.map(item => (
                  <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: '1.2em',
                    borderRadius: '.9em',
                  }}>
                    <Color color={item.color} />
                    <ListItemHour>
                      <WeatherComponent iconId={item.forecast.weatherIcon}/>
                    </ListItemHour>
                    <ListItemHour>{item.date.time}</ListItemHour>
                    <ListItemText>{item.reminder}</ListItemText>
                    <ButtonBase
                      onClick={() => { handleEdit(item) }}
                      style={{
                        fontSize: '1.2em',
                        margin: '.9em',
                        borderRadius: '25px'
                      }}
                    >
                      <EditAttributes />
                    </ButtonBase>
                    <ButtonBase
                      onClick={() => { saveReminders({ ...item, delete: true }) }}
                      style={{
                        fontSize: '1.2em',
                        margin: '.9em',
                        borderRadius: '25px'
                      }}
                    >
                      <Delete />
                    </ButtonBase>
                  </div>
                ))
              }

            </List>

          ) :
            <RemindersForm
              handleSubmit={saveReminders}
              handleClose={handleClose}
              selectedDate={selectedDate}

              {
              ...selectedReminder
              }

            />
          }

        </div>






        {!edit ?
          <Fab
            disabled={!selectedDate}
            onClick={() => hanldeCreate(true)}
            color="primary" aria-label="add" className={classes.fab}>
            <AddIcon />
          </Fab>
          : <Fab
            onClick={() => handleEdit(true)}
            color="primary" aria-label="add" className={classes.fab}>
            <ArrowBackIos />
          </Fab>
        }

      </EnvelopeLayout>




    </>
  )
}


const List = styled.div`
  width:100%;
  max-height:80vh;
`;

const ListItem = styled.div`
  border-bottom: 1px solid #ececec;
  align-items:center;
  padding:.6em;
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  
`

const ListItemText = styled.span`
  font-size:1.2em;
  flex:3;
`
const ListItemHour = styled.span`
  font-size:1.2em;
  flex:1;
`



const Color = styled.div`
    background-color:${props => props.color};
    width:${props => props.selected ? '1.8em' : '1.2em'};
    height:${props => props.selected ? '1.8em' : '1.2em'};
    border-radius:25px;
    -webkit-box-shadow: 0px 8px 6px -6px rgba(0,0,0,0.123);
    -moz-box-shadow: 0px 8px 6px -6px rgba(0,0,0,0.123);
    box-shadow: 0px 8px 6px -6px rgba(0,0,0,0.123);
    margin:0 .6em 0 .6em;
    transition: all .3s ease-in-out;
    &:hover{
        transform: scale(1.5);
    }
    cursor:pointer;
`




