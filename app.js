// Track Computer and Player scores

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const result = choices[Math.floor(Math.random() * choices.length)];
  console.log(`computer: ${result}`);
  return result;
}

function getHumanChoice() {
  const userPrompt = prompt(
    "Enter: (rock, paper, scissors)" || ""
  ).toLowerCase();
  console.log(`player: ${userPrompt}`);
  return userPrompt;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanSelection, computerSelection) {
    console.log(`Player: ${humanSelection} | Computer: ${computerSelection}`);
    if (
      (humanSelection === "rock" && computerSelection === "scissors") ||
      (humanSelection === "paper" && computerSelection === "rock") ||
      (humanSelection === "scissors" && computerSelection === "paper")
    ) {
      humanScore++;
      console.log(`You win! ${humanSelection} beats ${computerSelection}`);
    } else if (humanSelection === computerSelection) {
      console.log("Draw!");
    } else {
      computerScore++;
      console.log(`You lose! ${computerSelection} beats ${humanSelection}`);
    }
  }

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  console.log("======================");
  console.log("THE GAME IS OVER!");
  console.log(`PLAYER SCORES: ${humanScore}`);
  console.log(`COMPUTER SCORES: ${computerScore}`);
  console.log("======================");
}

playGame();
// wtfff
