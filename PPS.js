
let choice = ["Pierre", "Feuille", "Ciseaux"];

function getComputerChoice(){
    let randomChoice = Math.floor(Math.random()*choice.length);
    return randomChoice;
}

function getPlayerChoice(){
    let playerChoice = prompt("Choississez P pour Pierre, F pour Feuille ou C pour Ciseaux: ");
    return playerChoice;
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === "P"){
        if (computerSelection === "Pierre"){
            alert("Egalité !");
        }else if (computerSelection === "F"){
            alert("Perdu ! La feuille bat la pierre.");
        }else{
            alert("Gagné ! La pierre bat les ciseaux.");
        }
    }

    if (playerSelection === "F"){
        if (computerSelection === "Pierre"){
            alert("Gagné ! La feuille bat la Pierre");
        }else if (computerSelection === "Feuille"){
            alert("Egalité !");
        }else{
            alert("Perdu ! Les ciseaux coupent la feuille.");
        }
    }

    if (playerSelection === "Ciseaux"){
        if (computerSelection === "Pierre"){
            alert("Perdu ! La pierre bat les ciseaux.");
        }else if (computerSelection === "Feuille"){
            alert("Gagné ! Les ciseaux coupent la pierre.");
        }else{
            alert("Egalité !");
        }
    }
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice()

console.log(playRound(playerSelection, computerSelection));
