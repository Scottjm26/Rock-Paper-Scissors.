function getComputerChoice(){
let things = ["Rock", "Paper", "Scissor"];
let thing = things[Math.floor(Math.random()*things.length)];
return thing;}
getComputerChoice()

function playGame(playerSelection, computerSelection){
    if (playerSelection == "rock") and (computerSelection == "scissor")
    {return "Computer loses";}
    if (playerSelection == "paper") and (computerSelection == "rock")
    {return "Computer loses"}
    if (playerSelection == "scissors") and (computerSelection == "paper")
    {return "Computer loses"}

    let playerSelection = "rock"
    let computerSelection = getComputerChoice();
    console.log(playGame(playerSelection, computerSelection))}



