var timeDisplayEl = $("#time-display");
var pastTime = $("#past");
var presentTime = $("#present");
var futureTime = $("#future");

function displayTime() {
  var rightNow = moment().format("MMM DD, YYYY [at] HH:mm:ss a");
  timeDisplayEl.text(rightNow);
}
setInterval(displayTime, 1000);

displayColor();
setInterval(displayColor, 5000);
//every 5 seconds displays the colors
//When I display the color then remove all classes
function displayColor() {
  $("#msg-10").removeClass("present").removeClass("past").removeClass("future");
  var hour = moment().hour();
  if (hour > 17 || hour < 9) {
    $(
      "#msg-9,#msg-10,#msg-11,#msg-12,#msg-13,#msg-14,#msg-15,#msg-16,#msg-17"
    ).addClass("past");
  } else if (hour == 9) {
    // add class PRESENT to msg-9
    // add class FUTURE to msg-10... to msg-17
  } else if (hour == 10) {
    // add class PAST to msg-9
    // add class PRESENT to msg-10
    // add class FUTURE to msg-11... to msg-17
  }
}
//when it's after hours not 9-5 all times are in the past which is grey
