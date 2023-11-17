"use strict";
// random number 1 - 20, add + 1 to get 20
const secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

// message
const message = document.querySelector(".message");

// default score
let userScore = 20;

// score message
const scoreDisplay = document.querySelector(".score");

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
    document.querySelector(".number").textContent = secretNumber;
  } else if (guess > secretNumber && userScore > 1) {
    message.textContent = "A bit too high of a guess";
    message.style = "";
    // decrease score by 1
    userScore--;
    scoreDisplay.textContent = userScore;
  } else if (guess < secretNumber && userScore > 1) {
    message.textContent = "You guessed too low";
    message.style = "";
    // decrease score by 1
    userScore--;
    scoreDisplay.textContent = userScore;
  } else {
    message.textContent = "GAME OVER";
    message.style.color = "red";
    scoreDisplay.textContent = 0;
  }
});
