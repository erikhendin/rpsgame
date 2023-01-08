// Rock, Paper, Scissors

// Create Array containing the three options 
const rpsOptions =  ['rock', 'paper', 'scissors'];

// Set up some variables
let roundResult="";
let playerSelection="";
let computerSelection="";
let roundCount=0;
let roundWinner="";
let winsCPU=0;
let winsPlayer=0;

// Get Computer's option (random choice)
const getComputerChoice = (arr) => {
    const random = Math.floor(Math.random() * arr.length, 1);
    let CPUchoice = arr[random];
    return CPUchoice;
}

function playRound(playerSelection, computerSelection) { 
  // prompt user for player selection
  playerSelection=prompt("Please make your selection! Enter 'rock', 'paper' or 'scissors':", "");
    // make playerSelection text lowercase
  playerSelection = playerSelection.toLowerCase();
    // get computer selection
  computerSelection = getComputerChoice(rpsOptions);
  // evaluate who won the round based on player selection
  // nested switch statement - if player is rock compare against computer options, etc.
  switch(playerSelection) {
    case "rock":
      switch(computerSelection) {
        case "rock": 
          roundResult="tie";
          break;
        case "paper": 
          roundResult="cpu wins";
          break;
        case "scissors": 
          roundResult="player wins";
          break;
      }
      break;
    case "paper":
      switch(computerSelection) {
        case "rock": 
          roundResult="player wins";
          break;
        case "paper": 
          roundResult="tie";
          break;
        case "scissors":
          roundResult="cpu wins";
          break;
      }
      break;
    case "scissors":
      switch(computerSelection) {
        case "rock": 
          roundResult="cpu wins";
          break;
        case "paper":
          roundResult="player wins";
          break;
        case "scissors":
          roundResult="tie";
          break;
      }
      break;
    default:
          console.log("could not understand your selection. Round voided.");
          roundResult="void";
    }
    console.log("| Result: " + roundResult);
    console.log("| Player selection: " + playerSelection);
    console.log("| Computer selection: " + computerSelection);
    console.log("**End Round**");

    switch(roundResult) {
        case "cpu wins":
          roundWinner="cpu";
          break;
        case "player wins":
          roundWinner="player";
          break;
        case "tie":
          roundWinner="tie";
          break;
        case "void":
          roundWinner="void";
          break;
    }
    roundCount++;
  }

//playRound();

function playGame() { 
  console.clear();
  console.log("Let's play Rock, Paper, Scissors!");
  resetStats();
  for (let i = 1; i <= 5; i++) {
    console.log("**Starting Round " + i + "... Make your selection in Prompt!");
    playRound();
    // whoever is winner of the round will get a point recorded
    switch (roundWinner) {
      case "tie":
        winsCPU++;
        winsPlayer++;
      break;
      case "player":
        winsPlayer++;
      break;
      case "cpu":
        winsCPU++;
      break;
      case "void":
        roundCount--;
      break;
    roundCount++;
    } 
  }
  console.log("### GAME RESULTS ###");
  console.log("Num rounds played: " + roundCount);
  console.log("Player won: " + winsPlayer);
  console.log("Computer won: " + winsCPU); 
  if (winsCPU > winsPlayer){
    console.log("CPU Won! Better luck next time");      
  } else if (winsPlayer > winsCPU) {
    console.log("Player Wins! Congratulations!");
  } else if (winsPlayer === winsCPU) {
    console.log("Tie Game! Amazingly close.")
  } else {
    console.log("Something went wrong - please try again");
  }
}

function resetStats(){
  roundResult="Round Outcome: ";
  playerSelection="";
  computerSelection="";
  roundCount=0;
  roundWinner="";
  winsCPU=0;
  winsPlayer=0;
}

playGame();
