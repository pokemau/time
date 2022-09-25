const timeText = document.querySelector('.time-text');
const dateText = document.querySelector('.date-text');
const months = [
   'January', 'February', 'March',
   'April', 'May', 'June', 'July',
   'August', 'September', 'October',
   'November', 'December'
]

function showTimer() {
   const date = new Date();

   let hour = date.getHours();
   if(hour > 12) { hour -= 12; }
   let mins = date.getMinutes();
   if(mins < 10) { mins = `0${mins}` };
   let secs = date.getSeconds();
   if(secs < 10) {secs = `0${secs}`};
   if(hour < 10) {timeText.textContent = `0${hour}:${mins}:${secs}`}
   else {timeText.textContent = `${hour}:${mins}:${secs}`};

   const month = months[date.getMonth()];
   const day = date.getDate();
   const year = date.getFullYear();
   dateText.textContent = `${month} ${day}, ${year}`
}

setInterval(showTimer, 1000);