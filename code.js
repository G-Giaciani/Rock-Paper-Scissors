function getComputerChoice() {
    let valor = Math.random();
    if(valor < 0.33) {
        return 'rock';
    } else if(valor>0.33 && valor<0.66){
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getHumanChoice() {
    return prompt('Choose between rock, paper and scissors');
}

function playRound(humanFinal, computerChoice) {
    if(humanFinal == 'scissors' && computerChoice == 'paper'){
        console.log('You win! Scissors beats paper!');
        humanScore += 1;
    } else if(humanFinal == 'scissors' && computerChoice == 'rock'){
        console.log('You lose! Rock beats scissors!');
        computerScore += 1;
    } else if(humanFinal == 'rock' && computerChoice == 'scissors'){
        console.log('You win! Rock beats scissors!');
        humanScore += 1;
    }else if(humanFinal == 'rock' && computerChoice == 'paper'){
        console.log('You lose! Paper beats rock!');
        computerScore += 1;
    }else if(humanFinal == 'paper' && computerChoice == 'rock'){
        console.log('You win! Paper beats rock!');
        humanScore += 1;
    }else if(humanFinal == 'paper' && computerChoice == 'scissors'){
        console.log('You lose! Scissors beats paper!');
        computerScore += 1;
    }else{
        console.log("It's a draw!");
    }
}

function playGame(){
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    let humanFinal = humanChoice.toLowerCase();
    playRound(humanFinal, computerChoice);
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    humanFinal = humanChoice.toLowerCase();
    playRound(humanFinal, computerChoice);
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    humanFinal = humanChoice.toLowerCase();
    playRound(humanFinal, computerChoice);    
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    humanFinal = humanChoice.toLowerCase();
    playRound(humanFinal, computerChoice);
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    humanFinal = humanChoice.toLowerCase();
    playRound(humanFinal, computerChoice);

    console.log(`Your score is ${humanScore} and the computer score is ${computerScore}`);
}

let humanScore = 0;
let computerScore = 0;

playGame();

