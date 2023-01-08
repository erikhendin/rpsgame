// Rock, Paper, Scissors

// Create Array containing the three options 
const rpsOptions =  ['rock', 'paper', 'scissors'];

// Get Computer's option (random choice)
const getComputerChoice = (arr) => {
    const random = Math.floor(Math.random() * arr.length, 1);
    let CPUchoice = arr[random];
    return CPUchoice;
}
let roundResult="";
let playerSelection = "";
let computerSelection="";

function playRound(playerSelection, computerSelection) { 
  console.log("Let's play Rock, Paper, Scissors!");
  // make playerSelection text lowercase
  playerSelection=prompt("Please make your selection! Enter 'rock', 'paper' or 'scissors':", "");
  playerSelection = playerSelection.toLowerCase();
  computerSelection = getComputerChoice(rpsOptions);
  console.log("Player Selection: " + playerSelection);
  console.log("Computer Selection: " + computerSelection);
  roundResult="Round Outcome: ";

  // Evaluate who won the round, player or computer?
  switch(playerSelection) {
    case "rock":
      switch(computerSelection) {
        case "rock": 
          roundResult=roundResult + "tie";
          break;
        case "paper": 
          roundResult=roundResult + "cpu wins";
        case "scissors": 
          roundResult=roundResult + "player wins";
          break;
      }
      break;
    case "paper":
      switch(computerSelection) {
        case "rock": 
          roundResult=roundResult + "player wins";
          break;
        case "paper": 
          roundResult=roundResult + "tie";
          break;
        case "scissors":
          roundResult=roundResult + "cpu wins";
          break;
      }
      break;
    case "scissors":
      switch(computerSelection) {
        case "rock": 
          roundResult=roundResult + "cpu wins";
          break;
        case "paper":
          roundResult=roundResult + "player wins";
          break;
        case "scissors":
          roundResult=roundResult + "tie";
          break;
      }
    }
    console.log(roundResult);
  }

  playRound();

  function game() { 
  }
/**
Write a NEW function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
Remember loops? This is a great opportunity to use one to play those five rounds:

for (let i = 0; i < 5; i++) {
   // your code here!
}
At this point you should be using console.log() to display the results of each round and the winner at the end.
 */