"use strict";
// random number 1 - 20, add + 1 to get 20
const number = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = number;

// click event handler for check button to confirm user selection
document.querySelector(".check").addEventListener("click", function () {
  // convert string value to number
  const guess = Number(document.querySelector(".guess").value);

  console.log(typeof guess, guess);

  //   if no number selected, display message
  if (!guess) {
    const noNumber = document.querySelector(".message");

    noNumber.textContent = "Please guess a number!";
    noNumber.style.color = "red";
  }
});
