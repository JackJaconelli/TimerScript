function updateCountdown() {
  var now = new Date();
  var lastResetTime = localStorage.getItem('lastResetTime');

  if (!lastResetTime) {

    localStorage.setItem('lastResetTime', now.toISOString());
  } else {
    var nextResetTime = new Date(lastResetTime);
    nextResetTime.setDate(nextResetTime.getDate() + 14);
    var timeRemaining = nextResetTime - now;

    if (timeRemaining <= 0) {
      resetCountdown();
    } else {
      var remainingDays = Math.floor(timeRemaining / (24 * 60 * 60 * 1000));
      var remainingHours = Math.floor((timeRemaining % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
      var remainingMinutes = Math.floor((timeRemaining % (60 * 60 * 1000)) / (60 * 1000));
      var remainingSeconds = Math.floor((timeRemaining % (60 * 1000)) / 1000);

      var countdownString = "14 Day sale <br><br> Ends in: <br> <br>" + remainingDays + " days: " + remainingHours + " hours: " + remainingMinutes + " minutes: " + remainingSeconds + " seconds";
      document.getElementById("countdown").innerHTML = countdownString;
    }
  }
}

function resetCountdown() {
  localStorage.setItem('lastResetTime', new Date().toISOString());
  console.log("Countdown reset!");
}

setInterval(updateCountdown, 1000);

updateCountdown();
