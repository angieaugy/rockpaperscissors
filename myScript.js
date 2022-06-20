let matchResult = "";

let playerScore = 0;
let computerScore = 0;

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

// RPS Game Logic
function gameLogic(playerSelection, computerSelection) {
    
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

// Play Match
function playMatch() {

    let playerSelection = "";
    let computerSelection = "";

    const result = document.querySelector('.result')
    const matchText = document.getElementById('matchResult')
    const matchScore = document.getElementById('matchScore')

    // Increment scores according to who wins
    if (playerScore < 5 && computerScore < 5) {

        // Player and computer make a choice per match.
        playerSelection = this.value.toLowerCase();
        computerSelection = computerPlay();

        matchResult = gameLogic(playerSelection, computerSelection);
        

        if (matchResult == "win") {

            playerScore++;

        } else if (matchResult == "lose") {

            computerScore++;

        }

        matchText.textContent = matchAnnounce(matchResult, playerSelection, computerSelection)
        matchScore.textContent = "Player Score: " + playerScore + " || " + "Computer Score: " + computerScore

        result.append(matchText, matchScore)

    } 

    if (playerScore == 5 || computerScore == 5) {

        const finalWinner = document.getElementById('finalWinner')

        if (playerScore > computerScore) {

            finalWinner.textContent = "Player Wins!"

        } else {

            finalWinner.textContent = "Computer Wins!"

        }

        result.append(finalWinner)

    }

}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', playMatch))









