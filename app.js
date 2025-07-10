let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const result = choices[Math.floor(Math.random() * choices.length)];
  return result;
}

function getHumanChoice() {
  userPrompt = prompt("Enter: (rock, paper, scissors)");
  console.log(userPrompt);
  return userPrompt;
}

function playRound(getComputerChoice, getHumanChoice) {
  return getComputerChoice === getHumanChoice;
}
