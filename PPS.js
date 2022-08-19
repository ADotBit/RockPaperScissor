let playerScore = 0;
let computerScore = 0;
const logD = document.querySelector(".log");
const playerRun = document.querySelector(".player");
const computerRun = document.querySelector(".computer");
const buttons = document.querySelectorAll("button");
//create the text to indicate who wins
const txt = document.createElement("p");
const h2 = document.createElement("h2")
//Reset the game by reloading the page
const resetBtn = document.querySelector(".reset")
resetBtn.addEventListener("click", () => location.reload())
//Make button and game works
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const computerSelection = getComputerChoice();
        const playerSelection = `${button.className}`; 
        playRound(playerSelection, computerSelection);
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
// Make the score / decide who wins
function playRound(playerSelection, computerSelection){
    if (playerSelection === "pierre" && computerSelection === "ciseaux"){
        playerScore++;
        txt.textContent = "Gagné ! La pierre écrase les ciseaux.";
    }else if (playerSelection === "feuille" && computerSelection === "pierre"){
        playerScore++;
        txt.textContent = "Gagné ! La feuille couvre la pierre.";
    }else if (playerSelection === "ciseaux" && computerSelection === "feuille"){
        playerScore++;
        txt.textContent = "Gagné ! Les ciseaux coupent la feuille.";
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
    if (playerScore === 5){
        h2.textContent = `Vous avez gagné ${playerScore} points contre ${computerScore} points.`
        logD.append(h2);
    }else if (computerScore === 5){
        h2.textContent = `Vous avez perdu ${playerScore} points contre ${computerScore} points.`
        logD.append(h2);
    }
        
}
