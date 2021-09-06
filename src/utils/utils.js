function getTime(ms){

  var date = new Date(ms);
  var time = [];

  time.push(date.getUTCHours());
  time.push(date.getUTCMinutes());
  time.push(date.getUTCSeconds());

  return time.join(':');
}

export default getTime;