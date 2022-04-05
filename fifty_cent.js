window.addEventListener('load', calculateTime);
function calculateTime()
{ time = new Date();
var dayweek = time.getDay();
var hour  = time.getHours();
var minutes = time.getMinutes();
var week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ];
var ampm = hour < 12 ? 'AM': 'PM';
hour = hour % 12;
hour = (hour < 10 ? '0' + hour:hour);
minutes = minutes < 10 ? '0' + minutes: minutes;

document.getElementById('day').innerHTML = week[dayweek];
document.getElementById('hour').innerHTML = hour;
document.getElementById('minute').innerHTML = minutes;
document.getElementById('ampm').innerHTML = ampm;
setTimeout(calculateTime, 200);
}
















5