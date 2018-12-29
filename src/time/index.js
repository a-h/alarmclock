export const time = (hours, minutes, seconds) => ({
  hours,
  minutes,
  seconds,
});

export const addSecondTo = ({ hours, minutes, seconds }) => {
  if(seconds < 59) {
    return time(hours, minutes, seconds + 1);
  }
  if(minutes < 59) {
    return time(hours, minutes + 1, 0);
  }
  if(hours < 24) {
    return time(hours + 1, 0, seconds);
  }
  return time(0, 0, 0);
};
