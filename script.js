"use strict";
// random number 1 - 20, add + 1 to get 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// message
const message = document.querySelector(".message");

// default score
let userScore = 20;

// score message
const scoreDisplay = document.querySelector(".score");

//highscore
let highScore = 0;

// click event handler for check button to confirm user selection
document.querySelector(".check").addEventListener("click", function () {
  // convert string value to number
  const guess = Number(document.querySelector(".guess").value);

  //   if no number selected, display message
  if (!guess) {
    message.textContent = "Please guess a number!";
    message.style.color = "red";
    // win game
  } else if (guess === secretNumber) {
    message.textContent = "Winner, winner!!!";
    message.style.color = "yellow";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".guess").disabled = true;

    // high score implementation
    if (userScore > highScore) {
      highScore = userScore;
      document.querySelector(".highscore").textContent = highScore;
    }
    // guess too high or too low
  } else if (guess !== secretNumber) {
    message.textContent =
      guess > secretNumber
        ? "A bit too high of a guess"
        : "You guessed too low";
    message.style = "";
    // decrease score by 1
    userScore--;
    scoreDisplay.textContent = userScore;
    if (userScore === 0) {
      message.textContent = "GAME OVER";
      message.style.color = "red";
      document.querySelector(".guess").disabled = true;
      scoreDisplay.textContent = 0;
      document.querySelector(".check").style.pointerEvents = "none";
    }
  }
});

// playing again
document.querySelector(".again").addEventListener("click", function () {
  //   location.reload();
  userScore = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  message.textContent = "Start guessing...";
  message.style = "";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  scoreDisplay.textContent = "20";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").disabled = false;
  document.querySelector(".check").style.pointerEvents = "";
});
