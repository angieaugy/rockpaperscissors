
// Function that will randomly return 'Rock', 'Paper' or 'Scissors'.
function computerPlay() {

    // return random value between 1 to 3
    let randomValue = Math.floor(Math.random() * 3 + 1); 

    // return String in accordance to outcome of randomValue
    switch (randomValue) {

        case 1:
            return "Rock"
            break;
        case 2:
            return "Paper"
            break;
        case 3:
            return "Scissors"

    }

}

console.log(computerPlay());

/*
Create function that plays single round of RPS. Takes two parameters, then returns string that declares winner of round. Input to be case-insensitive.

Rock beats Scissors
Scissors beats Paper
Paper beats Rock

*/

function playRound(playerSelection, computerSelection) {

    // return String of Win, Lose or Tie result
    function matchResult() {
        
        switch(true) {

            // Win Conditions
            case playerSelection == "Rock" && computerSelection == "Scissors":
            case playerSelection == "Scissors" && computerSelection == "Paper":
            case playerSelection == "Paper" && computerSelection == "Rock":

                return "You Win!";
                break;
            
            // Lose Conditions
            case playerSelection == "Rock" && computerSelection == "Paper":
            case playerSelection == "Scissors" && computerSelection == "Rock":
            case playerSelection == "Paper" && computerSelection == "Scissors":

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
            case playerSelection == "Rock" && computerSelection == "Scissors":
            case playerSelection == "Scissors" && computerSelection == "Rock":

                return "Rock beats Scissors!";
                break;
            
            // Scissors beats Paper
            case playerSelection == "Scissors" && computerSelection == "Paper":
            case playerSelection == "Paper" && computerSelection == "Scissors":
    
                return "Scissors beats Paper!";
                break;

            // Paper beats Rock
            case playerSelection == "Rock" && computerSelection == "Paper":
            case playerSelection == "Paper" && computerSelection == "Rock":
    
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

let result = playRound("Rock", "Paper");

console.log(result);



