import React from 'react';
// import div from '@material-ui/core/div';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    // padding: theme.spacing(0, 3),
  },
  div: {
    // maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
}));

const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. `;

export const Reminders = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
    
      <div className={classes.div}>
        <Grid container spacing={2}>
          <Grid item>
            <Avatar>W</Avatar>
          </Grid>
          <Grid item xs>
            <Typography>{message}</Typography>
          </Grid>
        </Grid>
      </div>
          
      <div className={classes.div}>
        <Grid container spacing={2}>
          <Grid item>
            <Avatar>W</Avatar>
          </Grid>
          <Grid item xs>
            <Typography>{message}</Typography>
          </Grid>
        </Grid>
      </div>

          
      <div className={classes.div}>
        <Grid container spacing={2}>
          <Grid item>
            <Avatar>W</Avatar>
          </Grid>
          <Grid item xs>
            <Typography>{message}</Typography>
          </Grid>
        </Grid>
      </div>
    </div>
    )
}
