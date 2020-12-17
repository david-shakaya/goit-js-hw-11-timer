import "../src/styles.css"

const refs = {
  spanDays: document.querySelector('[data-value="days"]'),
  spanHours: document.querySelector('[data-value="hours"]'),
  spanMins: document.querySelector('[data-value="mins"]'),
  spanSecs:document.querySelector('[data-value="secs"]'),
}

const days =(time)=> pad(Math.floor(time / (1000 * 60 * 60 * 24)));
const hours =(time)=> pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
const mins =(time)=> pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
const secs = (time) => pad(Math.floor((time % (1000 * 60)) / 1000));

let timeResult;

const intervalId = setInterval(() => {
  const curentTime = new Date()
  const targetDate = new Date('Jan 1, 2021')
  timeResult = targetDate - curentTime
  
  refs.spanSecs.textContent = secs(timeResult)
  refs.spanMins.textContent = mins(timeResult)
  refs.spanHours.textContent = hours(timeResult)
  refs.spanDays.textContent = days(timeResult)
  
}, 1000);

 /* padStart()
  * Принимает число, приводит к строке и добавляет в начало 0 если число меньше 2-х знаков
   */
function pad(value) {
    return String(value).padStart('2',0)
}