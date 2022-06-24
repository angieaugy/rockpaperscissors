// ------ Game Logic ------ //

let matchResult = '';

let playerScore = 0;
let computerScore = 0;

// Generate computer input for match
function computerPlay() {

    // Return random value between 1 to 3
    let randomValue = Math.floor(Math.random() * 3 + 1); 

    // Return String in accordance to outcome of randomValue
    switch (randomValue) {

        case 1:
            return 'rock'
            break;
        case 2:
            return 'paper'
            break;
        case 3:
            return 'scissors'

    }

}

// RPS Game Logic
function gameLogic(playerSelection, computerSelection) {
    
    switch(true) {

        // Win Conditions
        case playerSelection == 'rock' && computerSelection == 'scissors':
        case playerSelection == 'scissors' && computerSelection == 'paper':
        case playerSelection == 'paper' && computerSelection == 'rock':

            return 'win'
            break;
        
        // Lose Conditions
        case playerSelection == 'rock' && computerSelection == 'paper':
        case playerSelection == 'scissors' && computerSelection == 'rock':
        case playerSelection == 'paper' && computerSelection == 'scissors':

            return 'lose'
            break;
        
        // Tie Condition
        case playerSelection == computerSelection:

            return 'tie'

    }

}

// Return results of match to print
function matchAnnounce(matchResult, playerSelection, computerSelection) {

    function getResult(matchResult) {

        if (matchResult == 'win') {
    
            return 'You Win!'
    
        } else if (matchResult == 'lose') {
    
            return 'Computer Wins!'
    
        } else if (matchResult == 'tie') {
    
            return 'It\'s a Tie!'
        }
    
    }
    
    function getBreakdown(playerSelection, computerSelection) {
            
        switch(true) {
    
            // Rock beats Scissors
            case playerSelection == 'rock' && computerSelection == 'scissors':
            case playerSelection == 'scissors' && computerSelection == 'rock':
    
                return 'Rock beats Scissors!';
                break;
            
            // Scissors beats Paper
            case playerSelection == 'scissors' && computerSelection == 'paper':
            case playerSelection == 'paper' && computerSelection == 'scissors':
    
                return 'Scissors beats Paper!';
                break;
    
            // Paper beats Rock
            case playerSelection == 'rock' && computerSelection == 'paper':
            case playerSelection == 'paper' && computerSelection == 'rock':
    
                return 'Paper beats Rock!';
                break;
            
            default:
                return '';
        
        }
    
    }

    return getResult(matchResult) + ' ' + getBreakdown(playerSelection, computerSelection)
    
}

// Play Match
function playMatch() {

    let playerSelection = '';
    let computerSelection = '';

    // Increment scores according to who wins
    if (playerScore < 5 && computerScore < 5) {

        playerSelection = this.value.toLowerCase();
        computerSelection = computerPlay();

        matchResult = gameLogic(playerSelection, computerSelection);
        

        if (matchResult == 'win') {

            playerScore++;

        } else if (matchResult == 'lose') {

            computerScore++;

        }

        update(matchResult, playerSelection, computerSelection, playerScore, computerScore)

    } 

}

// ------ UI ------ //

const results = document.querySelector('.results')
const matchText = document.getElementById('matchResult')
const selection = document.querySelector('.selection')
const printComputerScore = document.getElementById('computerScore')
const printPlayerScore= document.getElementById('playerScore')
const finalWinner = document.getElementById('finalWinner')

// Button event listeners
const gameBoardButtons = document.querySelectorAll('.gameBoard button');
gameBoardButtons.forEach(button => button.addEventListener('click', playMatch))

const resetButton = document.getElementById('reset')
resetButton.addEventListener('click', reset)

// Update results display
function update(matchResult, playerSelection, computerSelection, playerScore, computerScore) {

    // reveal match results box at the beginning
    if (!matchText.classList.contains('active')) {

        results.firstElementChild.classList.toggle('active')
        selection.classList.toggle('active')
        matchText.classList.toggle('active')

    }

    // Display match results
    selection.firstElementChild.textContent = playerSelection
    selection.lastElementChild.textContent = computerSelection
    matchText.textContent = matchAnnounce(matchResult, playerSelection, computerSelection)
    printPlayerScore.textContent = playerScore
    printComputerScore.textContent = computerScore

    if (playerScore == 5 || computerScore == 5) {

        finalWinner.classList.toggle('active')
        resetButton.classList.toggle('active')

        if (playerScore > computerScore) {

            finalWinner.textContent = 'Player Wins!'

        } else {

            finalWinner.textContent = 'Computer Wins!'

        }

    }

}

// Reset Match
function reset() {

    matchresult = ''
    playerScore = 0
    computerScore = 0

    finalWinner.textContent = ''
    matchText.textContent = ''
    printPlayerScore.textContent = playerScore
    printComputerScore.textContent = computerScore
    resetButton.classList.toggle('active')
    finalWinner.classList.toggle('active')
    matchText.classList.toggle('active')
    selection.classList.toggle('active')
    results.firstElementChild.classList.toggle('active')
} 












