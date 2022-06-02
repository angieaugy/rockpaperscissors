
// Function that will randomly return 'Rock', 'Paper' or 'Scissors'.
function computerPlay() {

    // return random value between 1 to 3
    let randomValue = Math.floor(Math.random() * 3 + 1); 

    // return String in accordance to outcome of randomValue
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

/*
Create function that plays single round of RPS. Takes two parameters, then returns string that declares winner of round. Input to be case-insensitive.

Rock beats Scissors
Scissors beats Paper
Paper beats Rock

*/
// play a single round of Rock, Paper, Scissors and declare winner
function playRound(playerSelection, computerSelection) {

    playerSelection.toLowerCase();

    // return String of Win, Lose or Tie result
    function matchResult() {
        
        switch(true) {

            // Win Conditions
            case playerSelection == "rock" && computerSelection == "scissors":
            case playerSelection == "scissors" && computerSelection == "paper":
            case playerSelection == "paper" && computerSelection == "rock":

                return "You Win!";
                break;
            
            // Lose Conditions
            case playerSelection == "rock" && computerSelection == "paper":
            case playerSelection == "scissors" && computerSelection == "rock":
            case playerSelection == "paper" && computerSelection == "scissors":

                return "You Lose!";
                break;

            // Tie Condition
            case playerSelection === computerSelection:

                return "It\'s a Tie!"
                break;
        }
    }

    console.log(matchResult());

    // return String of match breakdown
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
                break;
        
        }

    }

    console.log(matchBreakdown());

    return matchResult() + " " + matchBreakdown();

}

let result = playRound("rock", computerPlay());

console.log(result);



