"use strict";

//Grab Elements
const goDownBtn = document.querySelector(".go-down");
const resetBtn = document.querySelector(".reset");
const goUpBtn = document.querySelector(".go-up");
let number = 0;

//Main Functionality
goUpBtn.addEventListener("click", function () {
  number = document.querySelector(".number");
  number.innerHTML++;
});

resetBtn.addEventListener("click", function () {
  number.innerHTML = "0";
});

goDownBtn.addEventListener("click", function () {
  number = document.querySelector(".number");
  number.innerHTML--;
});
