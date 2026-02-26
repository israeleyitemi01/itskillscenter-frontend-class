const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;


function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  // console.log(computerChoice);
  let result = "";

  if (playerChoice === computerChoice) {
    result = "It's a tie!";
  }
  else if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
           (playerChoice === 'paper' && computerChoice === 'rock') ||
           (playerChoice === 'scissors' && computerChoice === 'paper')) {
      result = "You win!";
  } else {
      result = "Computer wins!";
//   }
//   else {
//     switch (playerChoice) {
//       case "rock":
//         result = computerChoice === "scissors" ? "You win!" : "Computer wins!";
//         break;
//       case "paper":
//         result = computerChoice === "rock" ? "You win!" : "Computer wins!";
//         break;
//       case "scissors":
//         result = computerChoice === "paper" ? "You win!" : "Computer wins!";
//         break;
//     }
  }

  playerDisplay.textContent = `PLAYER: ${playerChoice}`;
  computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
  resultDisplay.textContent = result;
  
  if (result === "You win!") {
    resultDisplay.style.color = "green";
  } else if (result === "Computer wins!") {
    resultDisplay.style.color = "red";
  } else {
    resultDisplay.style.color = "black";
  }
  
  if (result === "You win!") {
    playerScore++;
    playerScoreDisplay.textContent = playerScore;
  } else if (result === "Computer wins!") {
    computerScore++;
    computerScoreDisplay.textContent = computerScore;
  }
}