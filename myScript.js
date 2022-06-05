const playerSelection = "rock";
const computerSelection = computerPlay();

// Function that will randomly return 'Rock', 'Paper' or 'Scissors'.
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

// Play a single round of Rock, Paper, Scissors and increments scores
function playRound(playerSelection, computerSelection) {

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

function matchAnnounce() {

    function matchResult() {

        if (result == "win") {
    
            return "You Win!"
    
        } else if (result == "lose") {
    
            return "Computer Wins!"
    
        } else if (result == "tie") {
    
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

let result = playRound(playerSelection, computerSelection);
console.log(result)

function game() {

    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {

        playRound(playerSelection, computerSelection);

    }

}



console.log(matchAnnounce())

/*

when user inputs Rock, Paper or Scissor
     -return playerScore++ or computerScore++ or no change
     -print match result

when playerScore or computerScore reaches 5, stop game and announce overall winner

*/





