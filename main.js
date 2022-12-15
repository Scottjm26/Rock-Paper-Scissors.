
let playerPoints = 0;
let computerPoints = 0;

function getComputerChoice(){
    let things = ["rock", "paper", "scissors"];
    let thing = things[Math.floor(Math.random()*things.length)];
    alert (thing)
    return thing;}
    
function playGame(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        alert ("Tied")}
    else if (playerSelection == "rock" && computerSelection == "scissors"){
        ++playerPoints;
        alert ("You win this round "+ playerSelection+ " beats " +computerSelection)}
    else if (playerSelection == "paper" && computerSelection == "rock"){
        ++playerPoints;
        alert ("You win this round "+ playerSelection+ " beats " +computerSelection)}
    else if (playerSelection == "scissors" && computerSelection == "paper"){
        ++playerPoints;
        alert ("You win this round "+ playerSelection+ " beats " +computerSelection)}
    else {
        ++computerPoints;
        alert("You lose this round "+ computerSelection + " beats " + playerSelection)}
    }
        
function game(){
    for(let i=0; i < 5; i++) {
    let playerSelection = prompt("Rock, Paper, or Scissors".toLowerCase())
    let computerSelection = getComputerChoice();
    playGame(playerSelection, computerSelection)}}
game()
    
console.log(playerPoints)
console.log(computerPoints)
if (playerPoints > computerPoints){
    alert("You are the winner!")}
else if (computerPoints > playerPoints){
    alert("The computer whooped your ass!")}
else
    {alert("You Tied!")}

    
    
    


   
        
