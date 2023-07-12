let minutes = 25;
let seconds = 0;
let isRunning = false;
let isBreak = false;
let interval;
let cyclesLeft;

const timerElement = document.querySelector('#timer');
const startButton = document.querySelector('#start');
const resetButton = document.querySelector('#reset');
const workTimeInput = document.querySelector('#workTime');
const breakTimeInput = document.querySelector('#breakTime');
const cyclesInput = document.querySelector('#cycles');
const alarmSound = new Audio('/assets/audio/alarm.wav');

startButton.addEventListener('click', () => {
   if (!isRunning) {
      cyclesLeft = parseInt(cyclesInput.value);
      if (isBreak) {
         minutes = parseInt(breakTimeInput.value);
      } else {
         minutes = parseInt(workTimeInput.value);
      }
      interval = setInterval(() => {
         if (seconds === 0) {
            minutes--;
            seconds = 59;
         } else {
            seconds--;
         }

         timerElement.textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

         if (minutes === 0 && seconds === 0) {
            clearInterval(interval);
            alarmSound.play();
            if (!isBreak) {
               cyclesLeft--;
            }
            if (cyclesLeft === 0) {
               isRunning = false;
               return;
            }
            isBreak = !isBreak;
            if (isBreak) {
               minutes = parseInt(breakTimeInput.value);
            } else {
               minutes = parseInt(workTimeInput.value);
            }
            timerElement.textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
         }
      }, 1000);
      isRunning = true;
   }
});

resetButton.addEventListener('click', () => {
   clearInterval(interval);
   minutes = parseInt(workTimeInput.value);
   seconds = 0;
   timerElement.textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
   isRunning = false;
   isBreak = false;
   cyclesLeft = parseInt(cyclesInput.value);
});