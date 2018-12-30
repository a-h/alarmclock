import React from 'react';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { ArrowDropUp, ArrowDropDown } from '@material-ui/icons';
import { connect } from 'react-redux';
import { hourIncrement, hourDecrement } from './reducers/modules/time'
import PropTypes from 'prop-types';

const UpArrowButton = ({ incrementHour }) => (
    <IconButton onClick={incrementHour}>
      <ArrowDropUp />
    </IconButton>
);

const DownArrowButton = ({ decrementHour }) => (
  <IconButton onClick={decrementHour}>
    <ArrowDropDown />
  </IconButton>
);

const twoDigits = (v) => v >= 10 ? v.toString() : '0' + v.toString();

const Clock = ({ hours, minutes, seconds, incrementHour, decrementHour }) => (
  <Paper style={{ padding: '10px' }}>
    <Grid container spacing={16} justify="center" alignItems="center" direction="row">
      <Grid item>
        <Grid container spacing={16} justify="center" alignItems="center" direction="column">
          <UpArrowButton incrementHour={incrementHour} />
          <Typography variant="h3" component="h3">
            {twoDigits(hours)}
          </Typography>
          <DownArrowButton decrementHour={decrementHour} />
        </Grid>
      </Grid>
      <Grid item>
        <Typography variant="h3" component="h3">:</Typography>
      </Grid>
      <Grid item>
        <Typography variant="h3" component="h3">
          {twoDigits(minutes)}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h3" component="h3">:</Typography>
      </Grid>
      <Grid item>
        <Typography variant="h3" component="h3">
          {twoDigits(seconds)}
        </Typography>
      </Grid>
    </Grid>
  </Paper>
);

Clock.propTypes = {
  incrementHour: PropTypes.func,
  decrementHour: PropTypes.func,
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = {
  incrementHour: hourIncrement,
  decrementHour: hourDecrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Clock);
