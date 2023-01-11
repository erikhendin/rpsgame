// Rock, Paper, Scissors

// Create Array containing the three options 
const rpsOptions =  ['rock', 'paper', 'scissors'];

// Set up some variables
let roundWinner=""; // will store who won the round
let playerSelection=""; // what player selected
let computerSelection=""; // what cpu selected
let roundCount=0; // will store how many rounds have been played.
let pointsCPU=0; // store number of points for Computer
let pointsPlayer=0; // store number of points for Player
let tieCount=0; // store number of tie rounds in the game
let voidCount=0; // if user enters invalid selection, round will count as "void"

// Get Computer's option (random choice)
const getComputerChoice = (arr) => {
    const random = Math.floor(Math.random() * arr.length, 1);
    let CPUchoice = arr[random];
    return CPUchoice;
}

function playRound(playerSelection, computerSelection) { 
  roundWinner=""; // reset roundwinner

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
          roundWinner="tie";
          break;
        case "paper": 
          roundWinner="cpu";
          break;
        case "scissors": 
          roundWinner="player";
          break;
      }
      break;
    case "paper":
      switch(computerSelection) {
        case "rock": 
          roundWinner="player";
          break;
        case "paper": 
          roundWinner="tie";
          break;
        case "scissors":
          roundWinner="cpu";
          break;
      }
      break;
    case "scissors":
      switch(computerSelection) {
        case "rock": 
          roundWinner="cpu";
          break;
        case "paper":
          roundWinner="player";
          break;
        case "scissors":
          roundWinner="tie";
          break;
      }
      break;
    default: // if user enters something other than rock paper scissors, no points awarded
          console.log("We could not understand your selection. No points awarded.");
          roundWinner="void";
    }
    console.log(`***** Round Winner: ${roundWinner} *****`);
    console.log("| Player selection: " + playerSelection);
    console.log("| Computer selection: " + computerSelection);
    console.log("***** End Round ************************");

  }

//playRound();

function playGame() { 
  console.clear();
  console.log("Let's play Rock, Paper, Scissors! Player vs Computer");
  // reset all "counters" 
  resetStats();
  for (let i = 1; i <= 5; i++) {
    console.log("**Starting Round " + i + "... Make your selection in Prompt!");
    playRound();
    // whoever is winner of the round will get a point recorded
    switch (roundWinner) {
      case "tie":
        // if a tie, neither player nor CPU will get a point
        // store the tie round in this variable
        tieCount++;
      break;
      case "player":
        pointsPlayer++;
      break;
      case "cpu":
        pointsCPU++;
      break;
      case "void":
        // no points awarded but not a tie - "void" - round will count as "void"
        voidCount++;
      break;
    } 
    // add one to round count  
    roundCount++;
  }
  
  console.log("########### GAME RESULTS ############");
  console.log("Rounds played: " + roundCount);
  console.log("Player points: " + pointsPlayer);
  console.log("Computer points: " + pointsCPU);
  console.log("Tie Rounds: " + tieCount);
  console.log("Rounds Voided: " + voidCount); 

  if (pointsCPU > pointsPlayer){
    console.log("CPU Won! Better luck next time");      
  } else if (pointsPlayer > pointsCPU) {
    console.log("Player Wins! Congratulations!");
  } else if (pointsPlayer === 0 && pointsCPU === 0) {
    if (tieCount>0) {
      console.log("Tie Game! Amazingly close.");
    } else if (tieCount===0) {
      console.log("No one got any points - Nobody Wins!");
    }
  }
  console.log("########### GAME OVER ############");
}


// reset counts at the beginning of the game
function resetStats(){
  playerSelection="";
  computerSelection="";
  roundCount=0;
  roundWinner="";
  pointsCPU=0;
  pointsPlayer=0;
  tieCount=0;
  voidCount=0;
}

// playGame();
