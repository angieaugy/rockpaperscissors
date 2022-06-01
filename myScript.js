/*
Create function called computerPlay that will randomly return 'Rock', 'Paper' or 'Scissors'.
*/

function computerPlay() {

    // return random value between 0 to 2
    let randomValue = Math.floor(Math.random() * 3); 

    // print String in accordance to outcome of randomValue
    switch (randomValue) {

        case 0:
            console.log('Rock');
            break;
        case 1:
            console.log('Paper');
            break;
        case 2:
            console.log('Scissors');

    }

}

computerPlay();