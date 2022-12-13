function getComputerChoice(){
let things = ["rock", "paper", "scissors"];
let thing = things[Math.floor(Math.random()*things.length)];
alert (thing)
return thing;}


function playGame(playerSelection, computerSelection){
    if (playerSelection == computerSelection)
    alert ("Tied ")
    else if (playerSelection == "rock" && computerSelection == "scissors")
    alert (("You win "+ playerSelection+ " beats " +computerSelection));
    else if (playerSelection == "paper" && computerSelection == "rock")
    alert (("You win "+ playerSelection+ " beats " +computerSelection))
    else if (playerSelection == "scissors" && computerSelection == "paper")
    alert (("You win "+ playerSelection+ " beats " +computerSelection))
    else 
    alert ("You lose "+ computerSelection + " beats " + playerSelection) }
    
    let playerSelection = prompt("rock, paper, or scissors")
    let computerSelection = getComputerChoice();
    console.log(playGame(playerSelection, computerSelection))


function game(){
for (let i =0;i<5;i++) 
playGame(i)}