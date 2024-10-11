let humanScore = 0;
let computerScore = 0;

const results = document.querySelector("#results");

function getComputerChoice() {
    let valor = Math.random();
    if (valor < 0.33) {
        return 'rock';
    } else if (valor >= 0.33 && valor < 0.66) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playRound(humanFinal, computerChoice) {
    let roundResult = "";
    
    if (humanFinal === 'scissors' && computerChoice === 'paper') {
        roundResult = 'You win! Scissors beats paper!';
        humanScore += 1;
    } else if (humanFinal === 'scissors' && computerChoice === 'rock') {
        roundResult = 'You lose! Rock beats scissors!';
        computerScore += 1;
    } else if (humanFinal === 'rock' && computerChoice === 'scissors') {
        roundResult = 'You win! Rock beats scissors!';
        humanScore += 1;
    } else if (humanFinal === 'rock' && computerChoice === 'paper') {
        roundResult = 'You lose! Paper beats rock!';
        computerScore += 1;
    } else if (humanFinal === 'paper' && computerChoice === 'rock') {
        roundResult = 'You win! Paper beats rock!';
        humanScore += 1;
    } else if (humanFinal === 'paper' && computerChoice === 'scissors') {
        roundResult = 'You lose! Scissors beats paper!';
        computerScore += 1;
    } else {
        roundResult = "It's a draw!";
    }

    if (humanScore < 5 && computerScore < 5) {
        results.textContent = `${roundResult} Your score: ${humanScore}, Computer score: ${computerScore}`;
    } else if (humanScore === 5) {
        results.textContent = `Congratulations! You won the game! Final score: You - ${humanScore}, Computer - ${computerScore}`;
        resetGame();
    } else if (computerScore === 5) {
        results.textContent = `Sorry, you lost! Final score: You - ${humanScore}, Computer - ${computerScore}`;
        resetGame();
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
}

const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {playRound('rock', getComputerChoice())});

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {playRound('paper', getComputerChoice())});

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {playRound('scissors', getComputerChoice())});
