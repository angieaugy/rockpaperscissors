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
function matchAnnounce(matchResult, playerSelection, computerSelection) {

    function getResult(matchResult) {

        if (matchResult == "win") {
    
            return "You Win!"
    
        } else if (matchResult == "lose") {
    
            return "Computer Wins!"
    
        } else if (matchResult == "tie") {
    
            return "It\'s a Tie!"
        }
    
    }
    
    function getBreakdown(playerSelection, computerSelection) {
            
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

    return getResult(matchResult) + " " + getBreakdown(playerSelection, computerSelection)
    
}

// Increment scores according to who wins
function game() {
    
    let matchResult = "";

    let playerSelection = "";
    let computerSelection = "";

    let playerScore = 0;
    let computerScore = 0;

    while (playerScore < 5 && computerScore < 5) {

        // Player and computer make a choice per match.
        playerSelection = "Rock".toLowerCase();
        computerSelection = computerPlay();

        matchResult = playMatch(playerSelection, computerSelection);

        if (matchResult == "win") {

            playerScore++;

        } else if (matchResult == "lose") {

            computerScore++;

        }

        console.log(matchAnnounce(matchResult, playerSelection, computerSelection));
        console.log("Player Score: " + playerScore);
        console.log("Computer Score: " + computerScore);

    }

    console.log("Final Player Score: " + playerScore);
    console.log("Final Computer Score: " + computerScore);

}

game();

// test branch commit




