let choice = ["Pierre", "Feuille", "Ciseaux"];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let randomChoice = Math.floor(Math.random()*choice.length);
    return randomChoice;
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === "P" && computerSelection === "Ciseaux"){
        playerScore++;
        return "T'as gagné ! La pierre écrase les ciseaux.";
    }else if (playerSelection === "F" && computer === "Pierre"){
        playerScore++;
        return "T'as gagné ! La feuille couvre la pierre.";
    }else if (playerSelection === "C" && computerSelection === "Feuille"){
        playerScore++;
        return "T'as gagné ! Les ciseaux coupent la feuille.";
    }else if (playerSelection === "P" && computerSelection === "Feuille"){
        computerScore++;
        return "Perdu ! La feuille couvre la pierre.";
    }else if (playerSelection === "F" && computerSelection === "Ciseaux"){
        computerScore++;
        return "Perdu ! Les ciseaux coupent la feuille.";
    }else if (playerSelection === "C" && computerSelection === "Pierre"){
        computerScore++;
        return "Perdu ! La pierre écrase les ciseaux."
    }else{
        return "It's a tie."
    }
}

function game(){
    for (let round = 0; round < 5; round++){
        const playerSelection = prompt("Choississez P pour Pierre, F pour Feuille ou C pour Ciseaux: ").toUpperCase;
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }

    if (playerScore > computerScore){
        return "Vous avez gagné la partie.";
    }else if (computerScore > playerScore){
        return "Vous avez perdu la partie.";
    }

}

game()