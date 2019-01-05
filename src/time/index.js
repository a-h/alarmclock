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
  if(hours < 23) {
    return time(hours + 1, 0, 0);
  }
  return time(0, 0, 0);
};

export const incrementHour = ({ hours, minutes, seconds }) => {
  if(hours < 23) {
    return time(hours + 1, minutes, seconds);
  }
  return time(0, minutes, seconds);
};

export const decrementHour = ({ hours, minutes, seconds }) => {
  if(hours > 0) {
    return time(hours - 1, minutes, seconds);
  }
  return time(23, minutes, seconds);
};

export const incrementMinute = ({ hours, minutes, seconds }) => {
  if(minutes < 59) {
    return time(hours, minutes + 1, seconds);
  }
  return time(hours, 0, seconds);
};

export const decrementMinute = ({ hours, minutes, seconds }) => {
  if(minutes > 0) {
    return time(hours, minutes - 1, seconds);
  }
  return time(hours, 59, seconds);
};

export const incrementSecond = ({ hours, minutes, seconds }) => {
  if(seconds < 59){
    return time(hours, minutes, seconds + 1);
  }
  return time(hours, minutes, 0);
};

export const decrementSecond = ({ hours, minutes, seconds }) => {
  if(seconds <= 0){
    return time(hours, minutes, 59);
  }
  return time(hours, minutes, seconds - 1);
};