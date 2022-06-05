const playerSelection = prompt("Input");
const computerSelection = computerPlay();

// Generate computer input for match
function computerPlay() {

    // Return random value between 1 to 3
    let randomValue = Math.floor(Math.random() * 3 + 1); 

    // Return String in accordance to outcome of randomValue
    switch (randomValue) {

        case 1:
            return "rock"
            break;
        case 2:
            return "paper"
            break;
        case 3:
            return "scissors"

    }

}

// Play a single match of Rock, Paper, Scissors
function playMatch(playerSelection, computerSelection) {

    playerSelection.toLowerCase(); // make all player input lowercase
        
    switch(true) {

        // Win Conditions
        case playerSelection == "rock" && computerSelection == "scissors":
        case playerSelection == "scissors" && computerSelection == "paper":
        case playerSelection == "paper" && computerSelection == "rock":

            return "win"
            break;
        
        // Lose Conditions
        case playerSelection == "rock" && computerSelection == "paper":
        case playerSelection == "scissors" && computerSelection == "rock":
        case playerSelection == "paper" && computerSelection == "scissors":

            return "lose"
            break;
        
        // Tie Condition
        case playerSelection == computerSelection:

            return "tie"

    }

}

// Return results of match to print
function matchAnnounce() {

    function matchResult() {

        if (playround == "win") {
    
            return "You Win!"
    
        } else if (playround == "lose") {
    
            return "Computer Wins!"
    
        } else if (playround == "tie") {
    
            return "It\'s a Tie!"
        }
    
    }
    
    function matchBreakdown() {
            
        switch(true) {
    
            // Rock beats Scissors
            case playerSelection == "rock" && computerSelection == "scissors":
            case playerSelection == "scissors" && computerSelection == "rock":
    
                return "Rock beats Scissors!";
                break;
            
            // Scissors beats Paper
            case playerSelection == "scissors" && computerSelection == "paper":
            case playerSelection == "paper" && computerSelection == "scissors":
    
                return "Scissors beats Paper!";
                break;
    
            // Paper beats Rock
            case playerSelection == "rock" && computerSelection == "paper":
            case playerSelection == "paper" && computerSelection == "rock":
    
                return "Paper beats Rock!";
                break;
            
            default:
                return "";
        
        }
    
    }

    return matchResult() + " " + matchBreakdown()
    

}

let playround = playMatch(playerSelection, computerSelection);

let playerScore = 0;
let computerScore = 0;


// Increment Scores according to who wins
function game() {

    while (playerScore < 5 && computerScore < 5) {

        playMatch(playerSelection, computerSelection);

        if (playround == "win") {

            playerScore++;

        } else if (playround == "lose") {

            computerScore++;

        } else if (playround == "tie") {

            break

        }

    }

}

game();

console.log(matchAnnounce())
console.log("Player Score: " + playerScore);
console.log("Computer Score: " + computerScore);



