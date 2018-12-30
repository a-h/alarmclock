import React from 'react';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { ArrowDropUp, ArrowDropDown } from '@material-ui/icons';
import { connect } from 'react-redux';
import { hourIncrement, hourDecrement, minuteIncrement, minuteDecrement, secondIncrement, secondDecrement } from './reducers/modules/time'
import PropTypes from 'prop-types';

const UpArrowButton = ({ onClick }) => (
  <IconButton onClick={onClick}>
    <ArrowDropUp />
  </IconButton>
);

const DownArrowButton = ({ onClick }) => (
  <IconButton onClick={onClick}>
    <ArrowDropDown />
  </IconButton>
);

const twoDigits = (v) => v >= 10 ? v.toString() : '0' + v.toString();

const Clock = ({ hours, minutes, seconds,
  incrementHour, decrementHour,
  incrementMinute, decrementMinute,
  incrementSecond, decrementSecond }) => (
    <Paper style={{ padding: '10px' }}>
      <Grid container spacing={16} justify="center" alignItems="center" direction="row">
        <Grid item>
          <Grid container spacing={16} justify="center" alignItems="center" direction="column">
            <UpArrowButton onClick={incrementHour} />
            <Typography variant="h3" component="h3">
              {twoDigits(hours)}
            </Typography>
            <DownArrowButton onClick={decrementHour} />
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="h3" component="h3">:</Typography>
        </Grid>
        <Grid item>
          <Grid container spacing={16} justify="center" alignItems="center" direction="column">
            <UpArrowButton onClick={incrementMinute} />
            <Typography variant="h3" component="h3">
              {twoDigits(minutes)}
            </Typography>
            <DownArrowButton onClick={decrementMinute} />
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="h3" component="h3">:</Typography>
        </Grid>
        <Grid item>
          <Grid container spacing={16} justify="center" alignItems="center" direction="column">
            <UpArrowButton onClick={incrementSecond} />
            <Typography variant="h3" component="h3">
              {twoDigits(seconds)}
            </Typography>
            <DownArrowButton onClick={decrementSecond} />
          </Grid>
        </Grid>
      </Grid>
    </Paper >
  );

Clock.propTypes = {
  incrementHour: PropTypes.func,
  decrementHour: PropTypes.func,
  incrementMinute: PropTypes.func,
  decrementMinute: PropTypes.func,
  incrementSecond: PropTypes.func,
  decrementSecond: PropTypes.func,
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = {
  incrementHour: hourIncrement,
  decrementHour: hourDecrement,
  incrementMinute: minuteIncrement,
  decrementMinute: minuteDecrement,
  incrementSecond: secondIncrement,
  decrementSecond: secondDecrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Clock);
