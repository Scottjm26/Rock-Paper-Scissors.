function getComputerChoice(){
let things = ["rock", "paper", "scissors"];
let thing = things[Math.floor(Math.random()*things.length)];
alert (thing)
return thing;}


function playGame(playerSelection, computerSelection){
    if (playerSelection == computerSelection)
    alert ("Tied ")
    else if (playerSelection == "rock" && computerSelection == "scissors")
    (playerPoints++)("You win "+ playerSelection+ " beats " +computerSelection);
    else if (playerSelection == "paper" && computerSelection == "rock")
    (playerPoints++)("You win "+ playerSelection+ " beats " +computerSelection)
    else if (playerSelection == "scissors" && computerSelection == "paper")
    (playerPoints++) ("You win "+ playerSelection+ " beats " +computerSelection)
    else 
    (computerPoints++) (alert ("You lose "+ computerSelection + " beats " + playerSelection)) }
    
    let playerSelection = prompt("rock, paper, or scissors")
    let computerSelection = getComputerChoice();
    playGame(playerSelection, computerSelection)


function game()
    let playerPoints = 0
    let computerPoints = 0
    for (let i = 0; i < 5; i++)
game()