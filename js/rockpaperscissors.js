// Rock, Paper, Scissors

// Create Array containing the three options 
const rpsOptions =  ['rock', 'paper', 'scissors'];

// Get Computer's option (random choice)
const getComputerChoice = (arr) => {
    const random = Math.floor(Math.random() * arr.length, 1);
    let CPUchoice = arr[random];
    return CPUchoice;
}

// Test player selection
let playerSelection = "";
//console.log(getComputerChoice(rpsOptions));
const computerSelection = getComputerChoice(rpsOptions);

function playRound(playerSelection, computerSelection) { 
  console.log("Let's play Rock, Paper, Scissors!");
  // make playerSelection text lowercase
  playerSelection=prompt("Please make your selection! Enter 'rock', 'paper' or 'scissors':", "");
  playerSelection = playerSelection.toLowerCase();
  console.log("Player Selection: " + playerSelection);
  console.log("Computer Selection: " + computerSelection);
  let roundResult="Outcome: ";

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

//Print result of round
playRound(playerSelection, computerSelection);

