let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let pscore = document.getElementById("playerScore");
let cscore = document.getElementById("computerScore")
let resScore = document.getElementById("result")

rock.addEventListener("click", handle);
paper.addEventListener("click", mandle);
scissors.addEventListener("click", dandle);

let playerScore = 0;
let computerScore = 0;

function handle() {
    let mee = document.getElementById("me");
    mee.removeAttribute("class");
    mee.setAttribute("class", `fas fa-hand-rock`);
    let computerArr = ["fas fa-hand-rock", "fas fa-hand-paper", "fas fa-hand-scissors"];
    let random = Math.floor(Math.random() * 3);
    let randum = (computerArr[random]);
    console.log(randum)
    let comp = document.getElementById("ress")
    comp.removeAttribute("class");
    comp.setAttribute("class", randum);

    if (randum === "fas fa-hand-paper") {
        computerScore++
        cscore.innerHTML = computerScore;
        resScore.innerHTML = "Computer Win"
    } else if (randum === "fas fa-hand-scissors") {
        playerScore++
        pscore.innerHTML = playerScore;
        resScore.innerHTML = "You Win"

    } else {
        resScore.innerHTML = "Draw"

    }
}

function mandle() {
    let mee = document.getElementById("me");
    mee.removeAttribute("class");
    mee.setAttribute("class", `fas fa-hand-paper`);
    let computerArr = ["fas fa-hand-rock", "fas fa-hand-paper", "fas fa-hand-scissors"];
    let random = Math.floor(Math.random() * 3);
    let randum = (computerArr[random]);
    console.log(randum)
    let comp = document.getElementById("ress")
    comp.removeAttribute("class");
    comp.setAttribute("class", randum);
    if (randum === "fas fa-hand-scissors") {
        computerScore++
        cscore.innerHTML = computerScore;
        resScore.innerHTML = "Computer Win"
    } else if (randum === "fas fa-hand-rock") {
        playerScore++
        pscore.innerHTML = playerScore;
        resScore.innerHTML = "You Win"

    } else {
        resScore.innerHTML = "Draw"

    }
}

function dandle() {
    let mee = document.getElementById("me");
    mee.removeAttribute("class");
    mee.setAttribute("class", `fas fa-hand-scissors`);
    let computerArr = ["fas fa-hand-rock", "fas fa-hand-paper", "fas fa-hand-scissors"];
    let random = Math.floor(Math.random() * 3);
    let randum = (computerArr[random]);
    console.log(randum)
    let comp = document.getElementById("ress")
    comp.removeAttribute("class");
    comp.setAttribute("class", randum);
    if (randum === "fas fa-hand-rock") {
        computerScore++
        cscore.innerHTML = computerScore;
        resScore.innerHTML = "Computer Win"
    } else if (randum === "fas fa-hand-paper") {
        playerScore++
        pscore.innerHTML = playerScore;
        resScore.innerHTML = "You Win"

    } else {
        resScore.innerHTML = "Draw"

    }
}