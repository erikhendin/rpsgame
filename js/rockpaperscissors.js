// Rock, Paper, Scissors

// *********************
// 1/9/23 12pm EST 
// Fixes, refinements, improvements, optimizations?
// At some point I may want a "play again?" link
// Add validation - what if we want to validate so user cannot enter wrong value/misspelling etc.
// Add a way for play to choose how many rounds are played
// Right now I have it saying "round voided" if player enters incorrect value
// however total rounds it is counting is five (5) even if a round is voided.
// > Q: should it say number of rounds is 5 if one of those 5 is a 'voided' round
// OR maybe it counts the round but lists the round as voided.
// Rounds Played: [Number] | CPU Winner: [Number] | Player Winner | Rounds Voided: [Number]
// Do we want to change it so that if round is voided, it does NOT count points for either
// IF Tie means no one gets a point, then what happens if all rounds are a tie?
// That will mean you could have a game where nobody wins!
// i.e. 0 to 0 if five consecutive rounds where each round is a tie
// IF so, then I will also want to update rules in UI of html page 
// *********************

// Create Array containing the three options 
const rpsOptions =  ['rock', 'paper', 'scissors'];

// Set up some variables
let roundResult=""; // result of each round played
let playerSelection=""; // what player selected
let computerSelection=""; // what cpu selected
let roundCount=0; // will store how many rounds have been played.
let roundWinner=""; // will store who won the round
let pointsCPU=0; // how many points for CPI
let pointsPlayer=0; // how many points for Player

// Get Computer's option (random choice)
const getComputerChoice = (arr) => {
    const random = Math.floor(Math.random() * arr.length, 1);
    let CPUchoice = arr[random];
    return CPUchoice;
}

function playRound(playerSelection, computerSelection) { 
    // get computer selection
    computerSelection = getComputerChoice(rpsOptions);
    // prompt user for player selection
  playerSelection=prompt("Please make your selection! Enter 'rock', 'paper' or 'scissors':", "");
    // make playerSelection text lowercase
  playerSelection = playerSelection.trim().toLowerCase();
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
    default: // if user enters something other than rock paper scissors, void the round
          console.log("We could not understand your selection. Round voided.");
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
  console.log("Let's play Rock, Paper, Scissors! Player vs Computer");
  console.log("Five rounds.");
  console.log("1 point goes to winner of each round.");
  console.log("Tie = one point to player, one point to CPU");
  resetStats();
  for (let i = 1; i <= 5; i++) {
    console.log("**Starting Round " + i + "... Make your selection in Prompt!");
    playRound();
    // whoever is winner of the round will get a point recorded
    switch (roundWinner) {
      case "tie":
        pointsCPU++;
        pointsPlayer++;
      break;
      case "player":
        pointsPlayer++;
      break;
      case "cpu":
        pointsCPU++;
      break;
      case "void":
        roundCount--;
      break;
    roundCount++;
    } 
  }
  console.log("### GAME RESULTS ###");
  console.log("Num rounds played: " + roundCount);
  console.log("Player points: " + pointsPlayer);
  console.log("Computer points: " + pointsCPU); 
  if (pointsCPU > pointsPlayer){
    console.log("CPU Won! Better luck next time");      
  } else if (pointsPlayer > pointsCPU) {
    console.log("Player Wins! Congratulations!");
  } else if (pointsPlayer === pointsCPU) {
    console.log("Tie Game! Amazingly close.")
  } else {
    console.log("Something went wrong - please try again");
  }
}

// reset counts at the beginning of the game
function resetStats(){
  roundResult="Round Outcome: ";
  playerSelection="";
  computerSelection="";
  roundCount=0;
  roundWinner="";
  pointsCPU=0;
  pointsPlayer=0;
}

// playGame();
