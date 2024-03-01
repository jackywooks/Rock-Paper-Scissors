// write a function to randomly generate computer's choice of rock paper and scissor, return the randomly generated choice
const choiceList = ["ROCK", "PAPER", "SCISSOR"];

//initiate the score
let computerScore = 0;
let playerScore = 0;
let gameNo = 0;

//DOM Manipulation
//declare the element's varaibles
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorButton = document.querySelector("#scissor");
//create paragraph to display result
const result = document.querySelector("#result");
const playerChoicePara = document.createElement("p");
const computerChoicePara = document.createElement("p");
const roundResultPara = document.createElement("p");
const runningScorePara = document.createElement("p");
result.append(
  playerChoicePara,
  computerChoicePara,
  roundResultPara,
  runningScorePara
);

//add event listeners to the buttons to start the game
rockButton.addEventListener("click", () =>
  playRound("ROCK", getcomputerChoicePara())
);
paperButton.addEventListener("click", () =>
  playRound("PAPER", getcomputerChoicePara())
);
scissorButton.addEventListener("click", () =>
  playRound("SCISSOR", getcomputerChoicePara())
);

//get a random choice from computer
function getcomputerChoicePara() {
  //use array to store the computer's choice
  const computerChoice = Math.floor(Math.random() * choiceList.length);
  return choiceList[computerChoice];
}

//write a function to play the round
function playRound(playerChoice, computerChoice) {
  //change the selection of both players and computer to upper case to handle case sensitivity.
  playerChoice = playerChoice.toUpperCase();
  playerChoicePara.textContent = `Player: ${playerChoice}`;
  computerChoicePara.textContent = `Computer: ${computerChoice}`;
  let result = 0;
  //compare the rock paper scissor and determine winner, if else statement
  if (playerChoice === computerChoice) {
    playGame("Tie");
    return "Tie";
  } else if (
    (playerChoice === "ROCK" && computerChoice === "SCISSOR") ||
    (playerChoice === "PAPER" && computerChoice === "ROCK") ||
    (playerChoice === "SCISSOR" && computerChoice === "PAPER")
  ) {
    playGame("Player Wins");
    return "Player Wins";
  } else {
    playGame("Player Loses");
    return "Player Loses";
  }
}

//write a function to calculate the score of a game = 5rounds
function playGame(roundResult) {
  if (roundResult === "Player Wins") {
    playerScore++;
  } else if (roundResult === "Player Loses") {
    computerScore++;
  }
  roundResultPara.textContent = roundResult;
  // stay in the game if either player is less than 5 points
  if (playerScore < 5 && computerScore < 5) {
    runningScorePara.textContent = `PlayerScore: ${playerScore} Computer Score: ${computerScore}`;
  } else {
    gameNo ++;
    const finalResult = document.createElement("p");
    finalResult.textContent = playerScore==5?`Round ${gameNo} Player Wins.`:`Round ${gameNo} Computer Wins`;
    result.append(finalResult);
    playerScore = 0;
    computerScore = 0;
  }
}