
   let startTime;
   let elapsedTime = 0;
   let timerInterval;
   
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
      document.getElementById("timer").innerHTML = txt;
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
         startStopButton.textContent = "Iniciar";
      } else {
         start();
         isRunning = true;
         startStopButton.textContent = "Parar";
      }
   });
   
   let resetButton = document.getElementById("reset");
   
   resetButton.addEventListener("click", () => {
      reset();
   });