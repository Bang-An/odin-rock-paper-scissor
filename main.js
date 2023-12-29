function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    let index = Math.floor((Math.random() * 100)) % 3;
    return choices[index]
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    //check if valid input
    if(playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors"){
        // console.log("Invalid Input");
        return "invalid";
    }

    if(playerSelection === computerSelection){
        // console.log("We have a tie here")
        // return playRound(prompt("please enter your choice for this game(rock, paper or scissors)", ""), getComputerChoice())
        return "tie"
    }else if((playerSelection === "rock" && computerSelection ==="scissors") ||  
            (playerSelection === "scissors" && computerSelection ==="paper") ||
            (playerSelection === "paper" && computerSelection ==="rock")){
                return "player";
    }else{
        return "computer";
    }
}

// function displayResult(winner){
//     prompt()
// }

function showChoice(userSelection, computerSelection){
    userChoice.textContent = userSelection;
    computerChoice.textContent = computerSelection;
}

function changeScore(winner){
    if(winner === "player") userScore.textContent = parseInt(userScore.textContent) + 1;
    else if(winner === "computer") computerScore.textContent = parseInt(computerScore.textContent) + 1;
}

function clearScoreBoard(){
    userScore.textContent = "0";
    computerScore.textContent = "0";
}

function displayWinner(){
    if(userScore.textContent === "5"){
        alert("Congrats, you win the game");
        return true;
    }else if(computerScore.textContent ==="5"){
        alert(":( Computer wins the game");
        return true;
    }else{
        return false;
    }
}

// button reference
const btRock = document.querySelector(".button-rock");
const btPaper = document.querySelector(".button-paper");
const btScissors = document.querySelector(".button-scissors");

// choice reference
const userChoice = document.querySelector(".user-choice");
const computerChoice = document.querySelector(".computer-choice")

// score reference
const userScore = document.querySelector(".user-score");
const computerScore = document.querySelector(".computer-score");


btRock.addEventListener("click", () => {
    let computerChoice = getComputerChoice();
    let winner = playRound("rock", computerChoice);
    showChoice("rock", computerChoice);
    changeScore(winner);
    setTimeout(() => {
        if(displayWinner()) clearScoreBoard();
    }, 100);
}
);

btPaper.addEventListener("click", () => {
    let computerChoice = getComputerChoice();
    let winner = playRound("paper", computerChoice);
    showChoice("paper", computerChoice);
    changeScore(winner);
    setTimeout(() => {
        if(displayWinner()) clearScoreBoard();
    }, 100);
});

btScissors.addEventListener("click", () => {
    let computerChoice = getComputerChoice();
    let winner = playRound("scissors", computerChoice);
    showChoice("scissors", computerChoice);
    changeScore(winner);
    setTimeout(() => {
        if(displayWinner()) clearScoreBoard();
    }, 100);    
});


// function game(){
//     let countPlayer = 0, countComputer = 0;
//     while(countPlayer != 5 && countComputer != 5){
//         let res = playRound(prompt("please enter your choice for this game(rock, paper or scissors)", ""), getComputerChoice());
//         if(res === "player"){
//             console.log(`The winner of this round is ${res}`);
//             countPlayer += 1;
//         }else if(res === "computer"){
//             console.log(`The winner of this round is ${res}`);
//             countComputer += 1;
//         }else{
//             console.log("This round is not going to count b/c your input is not valid");
//         }
//     }

//     if(countPlayer === 5){
//         console.log("Player has won 5 games and the game stops now");
//     }else if(countComputer ===5){
//         console.log("Computer has won 5 games and the game stops now");
//     }
// }
