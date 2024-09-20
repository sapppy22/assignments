Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)

var seconds = 0;
var min = 0;
var hours = 0;
var day = "AM";
setInterval(count, 1000);
function count() {
  seconds++;
  if (seconds > 60) {
    seconds = 0;
    min++;
  }
  if (min > 60) {
    min = 0;
    hour++;
  }
  if (hours > 12) {
    hours = hours % 12;
    day = "PM";
  }
  console.log(`${hours}:${min}:${seconds}${day}`);
}
