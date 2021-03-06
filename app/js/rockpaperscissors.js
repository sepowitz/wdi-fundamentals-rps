////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either rock, paper, or scissors.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*            Get Moves             */
////////////////////////////////////////////////



function getPlayerMove(move) {
    return move || getInput();
    
}

function getComputerMove(move) {
    return move || randomPlay();
}


////////////////////////////////////////////////
/*           Determine Winner         */
////////////////////////////////////////////////

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove === computerMove) {
        winner = "tie";
    }
    if (playerMove === "rock") {
        if (computerMove === "scissors") {
            winner = "player";
        }
        else if (computerMove==="paper") {
            winner = "computer";
        }
    }
    if (playerMove ==="scissors") {
        if (computerMove === "paper") {
            winner = "player";
        }
        else if (computerMove === "rock") {
            winner = "computer";
        }
    }
    if (playerMove ==="paper") {
        if (computerMove ==="rock") {
            winner = "player";
        }
        else if (computerMove === "scissors") {
            winner = "computer";
        }
    }
    return winner;
}


function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    
    while(playerWins < 5 && computerWins < 5) {
        
        var playerMove = getPlayerMove(getInput());
        var computerMove = getComputerMove(randomPlay());

        var winner = getWinner(playerMove, computerMove);

        if(winner === "player"){
            playerWins++;
        }

        else if(winner === "computer"){
            computerWins++;
        }
        
        else {
            console.log("it's a tie");
        }
        
        console.log("Player chose " + playerMove + " while the computer chose " + computerMove);
        console.log("The score is currently Player: " + playerWins + " to Computer: " + computerWins);
    }
    return [playerWins, computerWins];
}

playToFive();

