import React from 'react';

const twoDigits = (v) => v >= 10 ? v.toString() : '0' + v.toString();

const Clock = ({ hours, minutes, seconds }) => (
  <div>{twoDigits(hours)}:{twoDigits(minutes)}:{twoDigits(seconds)}</div>
);

export default Clock;
