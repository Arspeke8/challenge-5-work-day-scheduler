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
//
//when it's after hours not 9-5 all times are in the past which is grey
//When user inputs text in box and clicks save, value is saved into local storage
// var emailInput = document.querySelector("#email");
var TimeBLock = document.querySelectorAll(
  "#msg-9,#msg-10,#msg-11,#msg-12,#msg-13,#msg-14,#msg-15,#msg-16,#msg-17"
);
var Saves = $(".buttonSave");
//var msgDiv = document.querySelector("#msg");
//var userEmailSpan = document.querySelector("#user-email");
//var userPasswordSpan = document.querySelector("#user-password");

//renderLastRegistered();

//function displayMessage(type, message) {
//  msgDiv.textContent = message;
// msgDiv.setAttribute("class", type);
//}

//function renderLastRegistered() {
//var email = localStorage.getItem("email");
//var password = localStorage.getItem("password");

// if (!email || !password) {
//  return;
// }

// userEmailSpan.textContent = email;
//// userPasswordSpan.textContent = password;
//}

Saves.on("click", function (event) {
  event.preventDefault();
  console.log(event);
  var btn = event.target;
  btn = $(btn);
  console.log(btn);
  console.log(btn.parent());
  console.log(btn.parent().prev());
  console.log(btn.parent().prev().text());
  console.log(btn.parent().prev().attr("id"));

  var Text = btn.parent().prev().text();
  var hour = btn.parent().prev().attr("id");

  localStorage.setItem(hour, Text);
  //  var email = document.querySelector("#email").value;
  // var password = document.querySelector("#password").value;

  // if (email === "") {
  //   displayMessage("error", "Email cannot be blank");
  // } else if (password === "") {
  //  displayMessage("error", "Password cannot be blank");
  // } else {
  //   displayMessage("success", "Registered successfully");

  //  localStorage.setItem("email", email);
  //   localStorage.setItem("password", password);
  //   renderLastRegistered();
  // }
});
var Text = localStorage.getItem("msg-9");
if (Text) $("#msg-9").text(Text);
var Text = localStorage.getItem("msg-10");
if (Text) $("#msg-10").text(Text);
var Text = localStorage.getItem("msg-11");
if (Text) $("#msg-11").text(Text);
var Text = localStorage.getItem("msg-12");
if (Text) $("#msg-12").text(Text);
var Text = localStorage.getItem("msg-13");
if (Text) $("#msg-13").text(Text);
var Text = localStorage.getItem("msg-14");
if (Text) $("#msg-14").text(Text);
var Text = localStorage.getItem("msg-15");
if (Text) $("#msg-15").text(Text);
var Text = localStorage.getItem("msg-16");
if (Text) $("#msg-16").text(Text);
var Text = localStorage.getItem("msg-17");
if (Text) $("#msg-17").text(Text);
