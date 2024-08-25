const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

let humanScore = 0;
let computerScore = 0;

const container = document.querySelector("#container");

const display = document.createElement("div");
display.classList.add("display");

const score = document.createElement("div");
score.classList.add("score");
updateScore();

container.appendChild(display);
container.appendChild(score);

const btns = document.querySelectorAll("button");
btns.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener("click", () => {
      playRound(button.id, getComputerChoice());
    });
  });

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
function playRound (playerChoice, computerChoice){
    if(playerChoice == computerChoice){
        display.textContent = "Result: Tie!";
        updateScore();
    } else if( playerChoice === ROCK && computerChoice === SCISSORS ||
        playerChoice === PAPER && computerChoice === ROCK ||
        playerChoice === SCISSORS && computerChoice === PAPER
    ){
        humanScore++;
        console.log('You Win! ' + playerChoice +  ' beats ' + computerChoice);
        display.textContent = 'Result: You Win! ' + playerChoice +  ' beats ' + computerChoice;
        updateScore();
    }else {
        computerScore++;
        console.log('You lose! ' + computerChoice +  ' beats ' + playerChoice);
        display.textContent = 'Result: You lose! ' + computerChoice +  ' beats ' + playerChoice;
        updateScore();

    }
}
function updateScore (){
    score.textContent = 'Player score: ' + humanScore + ' ' + 'Computer Score: ' + computerScore;
}
