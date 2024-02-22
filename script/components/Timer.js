(function (doc) {
  let started = false;
  let minute = 25;
  let second = 0;
  let timeInterval = null;

  function displayTime() {
    document.getElementById("Minute").innerText =
      minute < 10 ? "0" + minute : minute;
    document.getElementById("Second").innerText =
      second < 10 ? "0" + second : second;
  }

  function resetTime() {
    minute = 25;
    second = 0;
  }

  function calculateTime() {
    if (second === 0) {
      if (minute === 0) {
        clearInterval(timeInterval);
        return;
      }
      minute--;
      second = 59;
    } else {
      second--;
    }
  }

  function stop() {
    clearInterval(timeInterval);
    resetTime();
    displayTime();
  }

  function start() {
    timeInterval = setInterval(function () {
      calculateTime();
      displayTime();
    }, 1000);
  }

  doc.getElementById("StartBtn").addEventListener("click", function () {
    started = !started;
    if (started) {
      this.innerText = "Stop";
      start();
    } else {
      this.innerText = "Start";
      stop();
    }
  });

  displayTime();
})(document);
