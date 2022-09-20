var timeDisplayEl = $("#time-display");
var pastTime = $("#past");
var presentTime = $("#present");
var futureTime = $("#future");

function displayTime() {
  var rightNow = moment().format("MMM DD, YYYY [at] HH:mm:ss a");
  timeDisplayEl.text(rightNow);
}
setInterval(displayTime, 1000);
