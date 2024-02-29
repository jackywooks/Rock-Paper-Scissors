// write a function to randomly generate computer's choice of rock paper and scissor, return the randomly generated choice
const choiceList = ["ROCK", "PAPER", "SCISSOR"];

function getComputerChoice() {
  //use array to store the computer's choice
  const cpuChoice = Math.floor(Math.random() * choiceList.length);
  return choiceList[cpuChoice];
}

//write a function to play the round
function playRound(playerSelection, computerSelection) {
  //change the selection of both players and computer to upper case to handle case sensitivity.
  playerSelection = playerSelection.toUpperCase();
  console.log("Player: ", playerSelection);
  console.log("Computer: ", computerSelection);
  let result = 0;
  //compare the rock paper scissor and determine winner, if else statement
  if (playerSelection === computerSelection) {
    return "Tie";
  } else if (
    (playerSelection === "ROCK" && computerSelection === "SCISSOR") ||
    (playerSelection === "PAPER" && computerSelection === "ROCK") ||
    (playerSelection === "SCISSOR" && computerSelection === "PAPER")
  ) {
    return "Player Wins";
  } else {
    return "Player Loses";
  }
}

//write a function to play game = 5rounds
function playGame() {
  playerscore = 0;
  computerscore=0;
  for (i = 0; i < 5; i++) {
    playerSelection = prompt("Please input 'Rock','Paper' or 'Scissor'");
    if (choiceList.includes(playerSelection.toUpperCase())) {
      result = playRound(playerSelection, getComputerChoice());
      console.log(result);
      if (result === "Player Wins") {
        playerscore++;
      } else if (result === "Player Loses"){
        computerscore++;
      }
      console.log("Player Score", playerscore,"Computer Score", computerscore);
    } else {
      console.log("Invalid Input");
      break;
    }
  }
  console.log("Your Final Score:", playerscore," vs Computer",computerscore);
}

playGame();
