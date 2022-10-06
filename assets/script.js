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
  //$("#msg-10").removeClass("present").removeClass("past").removeClass("future");
  var hour = moment().hour();
  if (hour > 17 || hour < 9) {
    $(
      "#msg-9,#msg-10,#msg-11,#msg-12,#msg-13,#msg-14,#msg-15,#msg-16,#msg-17"
    ).addClass("past");
  } else if (hour == 9) {
    $("#msg-9").addClass("present");
    $(
      "#msg-10,#msg-11,#msg-12,#msg-13,#msg-14,#msg-15,#msg-16,#msg-17"
    ).addClass("future");
    // add class PRESENT to msg-9
    // add class FUTURE to msg-10... to msg-17
  } else if (hour == 10) {
    $("#msg-9").addClass("past");
    $("#msg-10").addClass("present");
    $("#msg-11,#msg-12,#msg-13,#msg-14,#msg-15,#msg-16,#msg-17").addClass(
      "future"
    );
    // add class PAST to msg-9
    // add class PRESENT to msg-10
    // add class FUTURE to msg-11... to msg-17
  } else if (hour == 11) {
    $("#msg-9,#msg-10").addClass("past");
    $("#msg-11").addClass("present");
    $("#msg-12,#msg-13,#msg-14,#msg-15,#msg-16,#msg-17").addClass("future");
  } else if (hour == 12) {
    $("#msg-9,#msg-10,#msg-11").addClass("past");
    $("#msg-12").addClass("present");
    $("#msg-13,#msg-14,#msg-15,#msg-16,#msg-17").addClass("future");
  } else if (hour == 13) {
    $("#msg-9,#msg-10,#msg-11,#msg-12").addClass("past");
    $("#msg-13").addClass("present");
    $("#msg-14,#msg-15,#msg-16,#msg-17").addClass("future");
  } else if (hour == 14) {
    $("#msg-9,#msg-10,#msg-11,#msg-12,#msg-13").addClass("past");
    $("#msg-14").addClass("present");
    $("#msg-15,#msg-16,#msg-17").addClass("future");
  } else if (hour == 15) {
    $("#msg-9,#msg-10,#msg-11,#msg-12,#msg-13,#msg-14").addClass("past");
    $("#msg-15").addClass("present");
    $("#msg-16,#msg-17").addClass("future");
  } else if (hour == 16) {
    $("#msg-9,#msg-10,#msg-11,#msg-12,#msg-13,#msg-14,#msg-15").addClass(
      "past"
    );
    $("#msg-16").addClass("present");
    $("#msg-17").addClass("future");
  } else if (hour == 17) {
    $(
      "#msg-9,#msg-10,#msg-11,#msg-12,#msg-13,#msg-14,#msg-15,#msg-16"
    ).addClass("past");
    $("#msg-17").addClass("present");
  }
}
//when it's after hours not 9-5 all times are in the past which is grey
//When user inputs text in box and clicks save, value is saved into local storage
