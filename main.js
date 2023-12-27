function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    let index = Math.floor((Math.random() * 100)) % 3;
    return choices[index]
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    //check if valid input
    if(playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors"){
        console.log("Invalid Input");
        return "invalid";
    }

    if(playerSelection === computerSelection){
        return playRound(prompt("please enter your choice for this game(rock, paper or scissors)", ""), getComputerChoice())
    }else if((playerSelection === "rock" && computerSelection ==="scissors") ||  
            (playerSelection === "scissors" && computerSelection ==="paper") ||
            (playerSelection === "paper" && computerSelection ==="rock")){
                return "player";
    }else{
        return "computer";
    }
}

function game(){
    let countPlayer = 0, countComputer = 0;
    while(countPlayer != 0 && countComputer != 0){
        let res = playRound(prompt("please enter your choice for this game(rock, paper or scissors)", ""), getComputerChoice());
        if(res === "player"){
            console.log(`The winner of this round is ${res}`);
            countPlayer += 1;
        }else if(res === "computer"){
            console.log(`The winner of this round is ${res}`);
            countComputer += 1;
        }else{
            console.log("This round is not going to count b/c your input is not valid");
        }
    }

    if(countPlayer === 5){
        console.log("Player has won 5 games and the game stops now");
    }else if(countComputer ===5){
        console.log("Computer has won 5 games and the game stops now");
    }
}