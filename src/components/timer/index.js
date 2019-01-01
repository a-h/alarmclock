import React, { Component } from 'react';
import { connect } from 'react-redux';

// ACTIONS
export const SECOND_ELAPSED = 'TIMER/SECOND_ELAPSED';

// ACTION CREATORS
export const secondElapsed = () => ({
  type: SECOND_ELAPSED
});

// COMPONENTS
class Timer extends Component {
  render() {
    return <div>{this.props.children}</div>;
  }
  componentDidMount() {
    setInterval(() => this.props.dispatch(secondElapsed()), 1000);
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
