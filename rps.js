// Write the logic for RPS

/**
 * This function generates the computer move for us, and returns it as a string
 */

var playerScore = 0;
var computerScore = 0;
var drawScore = 0;

function generateComputerMove() {
  // Math.random gives us a number between 0 and 1
  var randomNumber = Math.random();
  if (randomNumber <= 0.33) {
    // if random number < 0.33 -> rock
    return "rock";
  } else if (randomNumber > 0.33 && randomNumber <= 0.66) {
    // if random number > 0.33 and < 0.66 -> paper
    return "paper";
  } else {
    // -> scissors
    return "scissors";
  }
}
function computerMoveIs(message) {
  const element = document.getElementById("computerMove");
  element.innerText = message;
}
function showText(message) {
  var element = document.getElementById("result");
  element.innerText = message;
}
// Create a scoreboard to keep track of computer vs player wins using HTML
// add a  for loop for a finite number of times to play the game
// write a function to capture the result then display the score in HTML

//
/**
 * This is a function which contains all of the game logic:
 *  - choosing the player move
 *  - generating the computer move
 *  - checking for the winner and displaying the outcome
 */
function playGame(playerMove) {
  const computerMove = generateComputerMove();
  var result = "";
  /* ORIGINAL PLAN */
  // if playerMove is rock and computerMove is rock
  // print out draw
  // if playerMove is rock and computerMove is paper
  // print out computer wins
  // if playerMove is rock and computerMove is scissors
  // print out player wins
  // if playerMove is paper and computerMove is paper
  // print out draw
  // if playerMove is paper and computerMove is rock
  // print out player wins
  // if playerMove is paper and computerMove is scissors
  // print out computer wins
  // if playerMove is scissors and computerMove is scissors
  // print out draw
  // if playerMove is scissors and computerMove is rock
  // print out computer wins
  // if playerMove is scissors and computerMove is paper
  // print out player wins

  /* REFACTORED PLAN */
  // if playerMove and computerMove are the same, its a draw
  // if playerMove is rock then check the following
  // if computerMove is paper
  // print out computer wins
  // if computerMove is scissors
  // print out player wins
  // if playerMove is paper then check the following
  // if computerMove is rock
  // print out player wins
  // if computerMove is scissors
  // print out computer wins
  // if playerMove is scissors
  // if computerMove is paper
  // print out player wins
  // if computerMove is rock
  // print out computer wins

  if (playerMove === computerMove) {
    result = "draw";
    drawScore++;
  } else if (playerMove === "rock") {
    if (computerMove === "paper") {
      result = "computer wins";
      computerScore++;
    } else if (computerMove === "scissors") {
      result = "player wins";
      playerScore++;
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "player wins";
      playerScore++;
    } else if (computerMove === "scissors") {
      result = "computer wins";
      computerScore++;
    }
  } else if (playerMove === "scissors") {
    if (computerMove === "paper") {
      result = "player wins";
      playerScore++;
    } else if (computerMove === "rock") {
      result = "computer wins";
      computerScore++;
    }
  }
  showComputerMove(computerMove);
  showText(result);
}

function showComputerMove(computerMove) {
  document.getElementById("computerMove").innerText =
    "Computer move is " + computerMove;
}

var rockBtn = document.getElementById("rock");
rockBtn.addEventListener("click", playRock);

function playRock() {
  playGame("rock");
}
var paperBtn = document.getElementById("paper");
paperBtn.addEventListener("click", playPaper);

function playPaper() {
  playGame("paper");
}
var scissorsBtn = document.getElementById("scissors");
scissorsBtn.addEventListener("click", playScissors);

function playScissors() {
  playGame("scissors");
}

function handleScore() {
  document.getElementById("wins").innerText = "Player score = " + playerScore;
  document.getElementById("draw").innerText = "Draw scores = " + drawScore;
  document.getElementById("losses").innerText =
    "Computer score = " + computerScore;
}

//add a validation function in which an alert is
//generated when input is left blank to prompt
//user to enter name

function handleUserName() {
  var input = document.getElementById("username-input");
  var display = document.getElementById("username-display");

  if (input.value !== "") {
    display.innerText = input.value;
  } else {
    alert("Invalid username");
  }
}
var userNameBtn = document.getElementById("username-btn");
userNameBtn.addEventListener("click", handleUserName);

// a method to count: adding
// if computer wins x if player wins y winner adds to their win count
// handing the score back through innerText
