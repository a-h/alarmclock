import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const twoDigits = (v) => v >= 10 ? v.toString() : '0' + v.toString();

const Clock = ({ hours, minutes, seconds }) => (
  <Paper style={{ padding: '10px' }}>
    <Typography variant="h3" component="h3">
      {twoDigits(hours)}:{twoDigits(minutes)}:{twoDigits(seconds)}
    </Typography>
  </Paper>
);

export default Clock;
