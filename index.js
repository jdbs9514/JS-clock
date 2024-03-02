const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
let newDate = document.querySelector('.new-hour');
let newDay = document.querySelector('.day');
const completeDate = document.querySelector('.text-date');

function setDate(){
  const now = new Date();
  
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)` // en esta linea obtenemos la rotacion del segundero
  
  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)` // en esta linea obtenemos la rotacion del minutero

  const hours = now.getHours();
  const hoursDegrees = ((hours / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)` // en esta linea obtenemos la rotacion del horario

  // obteniendo la fecha actual
  const day = now.getDate();
  const month = now.getMonth();
  const year = now.getFullYear();

  // wrapping the date and time
  const newHour = hours + " : " + minutes + " : " + seconds;
  const newDateAct = day + " / " + month + " / " + year;

  // obtener la fecha en formato string y mostrarla
  const weekDay = now.toLocaleDateString('en', {weekday: 'short'}); // abreviatura del dia
  const currentMonth = now.toLocaleDateString('en', {month: 'short'}); // abreviatura del mes
  const dayNumber = now.getDate();
  const yearNumber = now.getFullYear();
  
  completeDate.innerHTML = weekDay + ", " + dayNumber + " " + currentMonth + " " + yearNumber

  // displaying the date and time
  newDate.innerHTML = newHour;
  newDay.innerHTML = newDateAct;


}

setInterval(setDate, 1000)
setDate();