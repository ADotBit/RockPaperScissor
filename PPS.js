let playerScore = 0;
let computerScore = 0;
const logD = document.querySelector(".log");
const playerRun = document.querySelector(".player");
const computerRun = document.querySelector(".computer");
const buttons = document.querySelectorAll("button");

//Make button
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const computerSelection = getComputerChoice();
        const playerSelection = `${button.className}`; 
        playRound(computerSelection, playerSelection);
        updateScore(playerScore, computerScore);
        checkWinner(playerScore, computerScore);
    })
})

// Make computer choice  in array
function getComputerChoice(){
    let choice = ["pierre", "feuille", "ciseaux"];
    let randomChoice = Math.floor(Math.random()*choice.length);
    return choice[randomChoice]; //I forgot the brackets to precise it is an array
}

function playRound(playerSelection, computerSelection){
    const txt = document.createElement("p");
    if (playerSelection === "pierre" && computerSelection === "ciseaux"){
        playerScore++;
        txt.textContent = "T'as gagné ! La pierre écrase les ciseaux.";
    }else if (playerSelection === "feuille" && computerSelection === "pierre"){
        playerScore++;
        txt.textContent = "T'as gagné ! La feuille couvre la pierre.";
    }else if (playerSelection === "ciseaux" && computerSelection === "feuille"){
        playerScore++;
        txt.textContent = "T'as gagné ! Les ciseaux coupent la feuille.";
    }else if (playerSelection === "pierre" && computerSelection === "feuille"){
        computerScore++;
        txt.textContent = "Perdu ! La feuille couvre la pierre.";
    }else if (playerSelection === "feuille" && computerSelection === "ciseaux"){
        computerScore++;
        txt.textContent = "Perdu ! Les ciseaux coupent la feuille.";
    }else if (playerSelection === "ciseaux" && computerSelection === "pierre"){
        computerScore++;
        txt.textContent = "Perdu ! La pierre écrase les ciseaux."
    }else if (playerSelection === computerSelection){
        txt.textContent = `Egalité ! Vous avez tous les deux choisis ${playerSelection}.`;   
    }
    logD.appendChild(txt);
}

function updateScore(playerScore, computerScore){
    playerRun.textContent = `${playerScore}`;
    computerRun.textContent = `${computerScore}`
}

function checkWinner(playerScore, computerScore) {
    const h2 = document.createElement("h2")
    if (playerScore === 5){
        h2.textContent = `Vous avez gagné ${playerScore} points contre ${computerScore} points.`
        logD.append(h2);
    }else if (computerScore === 5){
        h2.textContent = `Vous avez perdu ${playerScore} points contre ${computerScore} points.`
        logD.append(h2);
    }

}

