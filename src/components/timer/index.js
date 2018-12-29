import React, { Component } from 'react';
import { connect } from 'react-redux';
import { secondElapsed} from '../../reducers/modules/time';

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
