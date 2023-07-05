
let startTime;
let elapsedTime = 0;
let timerInterval;

let lapButton = document.getElementById("lap");
let lapsDiv = document.getElementById("laps");
let lapCount = 0;

function timeToString(time) {
   let diffInHrs = time / 3600000;
   let hh = Math.floor(diffInHrs);

   let diffInMin = (diffInHrs - hh) * 60;
   let mm = Math.floor(diffInMin);

   let diffInSec = (diffInMin - mm) * 60;
   let ss = Math.floor(diffInSec);

   let diffInMs = (diffInSec - ss) * 1000;
   let ms = Math.floor(diffInMs);

   let formattedHH = hh.toString().padStart(2, "0");
   let formattedMM = mm.toString().padStart(2, "0");
   let formattedSS = ss.toString().padStart(2, "0");
   let formattedMS = ms.toString().padStart(3, "0");

   return `${formattedHH}:${formattedMM}:${formattedSS}:${formattedMS}`;
}

function print(txt) {
   let parts = txt.split(":");
   let formattedMS = parts[3].slice(0, 2);
   let formattedTxt = `${parts[0]}:${parts[1]}:${parts[2]}:<span class="milliseconds">${formattedMS}</span>`;
   document.getElementById("timer").innerHTML = formattedTxt;
}


function start() {
   startTime = Date.now() - elapsedTime;
   function printTime() {
      elapsedTime = Date.now() - startTime;
      print(timeToString(elapsedTime));
      timerInterval = requestAnimationFrame(printTime);
   }
   timerInterval = requestAnimationFrame(printTime);
}

function pause() {
   cancelAnimationFrame(timerInterval);
}

function reset() {
   cancelAnimationFrame(timerInterval);
   print("00:00:00:000");
   elapsedTime = 0;
}

let startStopButton = document.getElementById("startStop");
let isRunning = false;

startStopButton.addEventListener("click", () => {
   if (isRunning) {
      pause();
      isRunning = false;
      startStopButton.textContent = "Start";
   } else {
      start();
      isRunning = true;
      startStopButton.textContent = "Stop";
   }
});

let resetButton = document.getElementById("reset");

lapButton.addEventListener("click", () => {
   lapCount++;
   let lapTime = timeToString(elapsedTime);
   let lapElement = document.createElement("p");
   lapElement.textContent = `${lapCount}. ${lapTime}`;
   lapsDiv.appendChild(lapElement);
});

resetButton.addEventListener("click", () => {
   reset();
   lapsDiv.innerHTML = "";
   lapCount = 0;
});