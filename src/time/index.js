export const time = (hours, minutes, seconds) => ({
  hours,
  minutes,
  seconds,
});

export const addSecond = ({ hours, minutes, seconds }) => {
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

export const addHour = ({ hours, minutes, seconds }) => {
  if(hours < 23) {
    return time(hours + 1, minutes, seconds);
  }
  return time(0, minutes, seconds);
};

export const removeHour = ({ hours, minutes, seconds }) => {
  if(hours > 0) {
    return time(hours - 1, minutes, seconds);
  }
  return time(23, minutes, seconds);
};