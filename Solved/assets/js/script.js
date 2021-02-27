// Use Moment.js to format the date and assign to the declared variable.
// TODO: 1. What is your graduation date in the following format: Jan 1st, 1999?
var gradDate = moment("05/23/2014").format('MMM Do, YYYY');
$("#1a").text(gradDate);

// TODO: 2. What day of the week will 1/1/2022 be?
var weekDay = moment("1/1/2022").format('dddd');
$("#2a").text(weekDay);

// TODO: 3. Out of 365, what day of the year is today?
var now = moment().DDD;
$("#3a").text(now);

// TODO: 4. What is the current time in the format: hours:minutes:seconds
var time = moment().format('hh:mm:ss');
$("#4a").text(time);

// TODO: 5. What is the current Unix timestamp?
var unix = moment().format('X');
$("#5a").text(unix);

// TODO: 6. Parse the following Unix timestamp, 1318781876, and convert into any time/date format.
var unixFormat = moment(1318781876).format('ddd, MMM Do YYYY, h:mm a');
$("#6a").text(unixFormat);

