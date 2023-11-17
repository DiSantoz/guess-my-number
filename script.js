"use strict";
// random number 1 - 20, add + 1 to get 20
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = secretNumber;

// message
const message = document.querySelector(".message");

// click event handler for check button to confirm user selection
document.querySelector(".check").addEventListener("click", function () {
  // convert string value to number
  const guess = Number(document.querySelector(".guess").value);

  console.log(typeof guess, guess);

  //   if no number selected, display message
  if (!guess) {
    message.textContent = "Please guess a number!";
    message.style.color = "red";
  } else if (guess === secretNumber) {
    message.textContent = "Winner, winner!";
    message.style.color = "green";
  } else if (guess > secretNumber) {
    message.textContent = "A bit too high of a guess";
    message.style = "";
  } else if (guess < secretNumber) {
    message.textContent = "You guessed too low";
    message.style = "";
  }
});
