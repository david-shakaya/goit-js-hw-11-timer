import '../src/styles.css'


const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const refs ={
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
  bodyStyle:document.querySelector('body')
}
// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };
// const randomColor =colors[randomIntegerFromInterval(0, 6)]

const randomColor = () => colors[Math.floor(Math.random() * colors.length)] //Генерит случ цвет



refs.startBtn.addEventListener('click', changeColor)
refs.stopBtn.addEventListener('click', stopChangeColor)

let intervalId = null;

function changeColor() {
  if (intervalId) {   // Проверка. Если старт нажали повторно нажить нельзя
    return
  }

  refs.startBtn.setAttribute("disabled", "true"); 
  intervalId = setInterval(function () {         // добавл интервал
  refs.bodyStyle.style.backgroundColor = randomColor();   //вызываем функц. и меням цвет 
  }, 1000);
}


function stopChangeColor() {
  if (intervalId) {           // Проверка. Если СТОП нажали повторно нажить нельзя
    refs.startBtn.removeAttribute("disabled")  //Удал все
    clearInterval(intervalId)
    intervalId = null   
  }
}