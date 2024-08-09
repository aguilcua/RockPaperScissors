const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    let result;
    if (choice === 0){
        result = ROCK;
    } else if (choice === 1){
        result = PAPER;
    } else {
        result = SCISSORS;
    }
    return result;
}
function getHumanChoice(){
    let playerChoice;
    let chosen = false;
    let result;
    while (!chosen){
        playerChoice = parseInt(prompt("Enter [1] for Rock, [2] for paper, [3] for scissors"));
        if(playerChoice === 1){
            result = ROCK;
            chosen = true;
        } else if(playerChoice === 2){
            result = PAPER;
            chosen = true;
        } else if (playerChoice === 3){
            result = SCISSORS;
            chosen = true;
        } else {
            console.log("you did not enter a valid number!\n");
        }
    }
    return result;
}
function playRound (playerChoice, computerChoice){
    if(playerChoice == computerChoice){
        console.log("TIE!");
    } else if( playerChoice === ROCK && computerChoice === SCISSORS ||
        playerChoice === PAPER && computerChoice === ROCK ||
        playerChoice === SCISSORS && computerChoice === PAPER
    ){
        humanScore++;
        console.log('You Win! ' + playerChoice +  ' beats ' + computerChoice);
    }else {
        computerScore++;
        console.log('You lose! ' + computerChoice +  ' beats ' + playerChoice);

    }
}
function playGame(){
    for(let i = 0; i < 5; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }
    if(humanScore > computerScore){
        console.log("Congratulations you won! with a score of " + humanScore +" to " + computerScore);
    } else {
        console.log("unfortunately you lose this time! with a score of " + humanScore +" to " + computerScore);
    }
}
console.log(playGame());
