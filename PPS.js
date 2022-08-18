let playerScore = 0;
let computerScore = 0;

const pBtn = document.querySelector(".pierre");
const fBtn = document.querySelector(".feuille");
const cBtn = document.querySelector(".ciseaux");



function getComputerChoice(){
    let choice = ["pierre", "feuille", "ciseaux"];
    let randomChoice = Math.floor(Math.random()*choice.length);
    return choice[randomChoice];
}

function playRound(playerSelection, computerSelection){
    const logD = document.querySelector(".log");

    if (playerSelection === "pierre" && computerSelection === "ciseaux"){
        playerScore++;
        const txt = document.createElement("p");
        txt.textContent = "T'as gagné ! La pierre écrase les ciseaux.";
        logD.appendChild(txt);
    }else if (playerSelection === "feuille" && computerSelection === "pierre"){
        playerScore++;
        const txt = document.createElement("p");
        txt.textContent = "T'as gagné ! La feuille couvre la pierre.";
        logD.appendChild(txt);
    }else if (playerSelection === "ciseaux" && computerSelection === "feuille"){
        playerScore++;
        const txt = document.createElement("p");
        txt.textContent = "T'as gagné ! Les ciseaux coupent la feuille.";
        logD.appendChild(txt);
    }else if (playerSelection === "pierre" && computerSelection === "feuille"){
        computerScore++;
        const txt = document.createElement("p");
        txt.textContent = "Perdu ! La feuille couvre la pierre.";
        logD.appendChild(txt);
    }else if (playerSelection === "feuille" && computerSelection === "ciseaux"){
        computerScore++;
        const txt = document.createElement("p");
        txt.textContent = "Perdu ! Les ciseaux coupent la feuille.";
        logD.appendChild(txt);
    }else if (playerSelection === "ciseaux" && computerSelection === "pierre"){
        computerScore++;
        const txt = document.createElement("p");
        txt.textContent = "Perdu ! La pierre écrase les ciseaux."
        logD.appendChild(txt);
    }else if (playerSelection === computerSelection){
        const txt = document.createElement("p");
        txt.textContent = `Egalité ! Vous avez tous les deux choisis ${playerSelection}`;
        logD.appendChild(txt);
    }
}

pBtn.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    const playerSelection = "pierre";
    playRound(computerSelection, playerSelection)
})

fBtn.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    const playerSelection = "feuille";
    playRound(computerSelection, playerSelection)
})

cBtn.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    const playerSelection = "ciseaux";
    playRound(computerSelection, playerSelection)
})
