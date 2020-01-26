import React from 'react';
import styled from 'styled-components';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIos from '@material-ui/icons/Close';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import { EnvelopeLayout } from './layouts/Envelope';
import RemindersForm from './RemindersForm';
import { CSS_HELPERS } from '../theme';

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
  saveReminders,
  selectedDate,
}) => {

  const classes = useStyles();

  const { reminders, loadingList, errorList } = remindersState;


  const remindersOnDay = reminders && selectedDate ? reminders.filter(item => item.date.day === selectedDate.format('YYYY/MM/DD')) : null;

  const [edit, setEdit] = React.useState(false);
  const handleEdit = (aux) => {
    if (selectedDate && aux) {
      setEdit(true)
    } else {
      setEdit(false)
    }
  }


  return (
    <>
      <EnvelopeLayout>

        <>
          <ListItem >
            <ListItemText style={{ fontSize: '1.5em', fontWeight: 500 }}> {selectedDate && selectedDate.format('DD/MM/YYYY')} </ListItemText>
          </ListItem>

          <List>
            {!edit ? (
              remindersOnDay && remindersOnDay.map(item => (
                <ListItem key={item.idReminder}>
                  <ListItemText>{item.reminder}</ListItemText>
                  <ListItemIcon><ArrowForwardIosIcon /></ListItemIcon>
                </ListItem>
              ))
            ) :
              <RemindersForm
                handleSubmit={saveReminders}
                selectedDate={selectedDate}
              />
            }
          </List>
        </>



        {!edit ?
          <Fab
            disabled={!selectedDate}
            onClick={() => handleEdit(true)}
            color="primary" aria-label="add" className={classes.fab}>
            <AddIcon />
          </Fab>
          : <Fab
            onClick={() => handleEdit(false)}
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
  margin: .9em 0 .9em 0;
  padding:.9em;


  display:flex;
  flex-direction:row;
  justify-content:space-between;
  
`

const ListPiority = styled.div`
`
const ListItemIcon = styled.i`
  font-size:1.2em;
`

const ListItemText = styled.span`
  font-size:1.2em;
`
