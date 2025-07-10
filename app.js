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
