import React from 'react';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { ArrowDropUp, ArrowDropDown } from '@material-ui/icons';
import PropTypes from 'prop-types';

const UpArrowButton = ({ onClick, disabled }) => (
  <IconButton onClick={onClick} disabled={disabled}>
    <ArrowDropUp />
  </IconButton>
);

const DownArrowButton = ({ onClick, disabled }) => (
  <IconButton onClick={onClick} disabled={disabled}>
    <ArrowDropDown />
  </IconButton>
);

const twoDigits = (v) => v >= 10 ? v.toString() : '0' + v.toString();

const Clock = ({ hours, minutes, seconds,
  hourIncrement, hourDecrement,
  minuteIncrement, minuteDecrement,
  secondIncrement, secondDecrement,
  isInSetTimeMode }) => (
    <Paper style={{ padding: '10px' }}>
      <Grid container spacing={16} justify="center" alignItems="center" direction="row">
        <Grid item>
          <Grid container spacing={16} justify="center" alignItems="center" direction="column">
            <UpArrowButton onClick={hourIncrement} disabled={!isInSetTimeMode} />
            <Typography variant="h3">
              {twoDigits(hours)}
            </Typography>
            <DownArrowButton onClick={hourDecrement} disabled={!isInSetTimeMode} />
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="h3">:</Typography>
        </Grid>
        <Grid item>
          <Grid container spacing={16} justify="center" alignItems="center" direction="column">
            <UpArrowButton onClick={minuteIncrement} disabled={!isInSetTimeMode} />
            <Typography variant="h3">
              {twoDigits(minutes)}
            </Typography>
            <DownArrowButton onClick={minuteDecrement} disabled={!isInSetTimeMode} />
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="h3">:</Typography>
        </Grid>
        <Grid item>
          <Grid container spacing={16} justify="center" alignItems="center" direction="column">
            <UpArrowButton onClick={secondIncrement} disabled={!isInSetTimeMode} />
            <Typography variant="h3">
              {twoDigits(seconds)}
            </Typography>
            <DownArrowButton onClick={secondDecrement} disabled={!isInSetTimeMode} />
          </Grid>
        </Grid>
      </Grid>
    </Paper >
  );

Clock.propTypes = {
  hourIncrement: PropTypes.func,
  hourDecrement: PropTypes.func,
  minuteIncrement: PropTypes.func,
  minuteDecrement: PropTypes.func,
  secondIncrement: PropTypes.func,
  secondDecrement: PropTypes.func,
};

export default Clock;
