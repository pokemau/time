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
   console.log(date)

   const hour = date.getHours();
   const mins = date.getMinutes();
   const secs = date.getSeconds();
   if(secs < 10) {
      timeText.textContent = `${hour}:${mins}:0${secs}`;
   }
   if(hour > 12){
      timeText.textContent = `0${hour-12}:${mins}:${secs}`;
   }else {
      timeText.textContent = `${hour}:${mins}:${secs}`;
   }

   const month = months[date.getMonth()];
   const day = date.getDate();
   const year = date.getFullYear();
   dateText.textContent = `${month} ${day}, ${year}`
}

setInterval(showTimer, 1000);