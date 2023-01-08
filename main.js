let playerPoints = parseInt(document.getElementById("playerScore").innerHTML);
let computerPoints = parseInt(document.getElementById("computerScore").innerHTML);
let count = 0;
 // buttons is a node list. It looks and acts much like an array.
     const buttons = document.querySelectorAll('button');

     // we use the .forEach method to iterate through each button
     buttons.forEach((button) => {

     // and for each one we add a 'click' listener
     button.addEventListener('click', (e) => {

function getComputerChoice(){
    let things = ["rock", "paper", "scissors"];
    let thing = things[Math.floor(Math.random()*things.length)];
    
    return thing;}
    
function playRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        alert ("Tied")}
    else if (playerSelection == "rock" && computerSelection == "scissors"){
        ++playerPoints;
        document.getElementById('playerScore').innerHTML = playerPoints;
        alert ("You win this round "+ playerSelection+ " beats " +computerSelection)}
    else if (playerSelection == "paper" && computerSelection == "rock"){
        ++playerPoints;
        document.getElementById('playerScore').innerHTML = playerPoints;
        alert ("You win this round "+ playerSelection+ " beats " +computerSelection)}
    else if (playerSelection == "scissors" && computerSelection == "paper"){
        ++playerPoints;
        document.getElementById('playerScore').innerHTML = playerPoints;
        alert ("You win this round "+ playerSelection+ " beats " +computerSelection)}
    else {
        ++computerPoints;
        document.getElementById('computerScore').innerHTML = computerPoints;
        alert("You lose this round "+ computerSelection + " beats " + playerSelection)}
    }
        
function game(){
     if (count >= 5 && playerPoints > computerPoints) {
     alert('Maximum rounds played. You are the Winner!')
    } 
    else if (count >= 5 && computerPoints > playerPoints) 
    {
        alert("The computer whooped your ass!")}
    else{	
        alert(`Round ${count}`);
    let playerSelection = button.id;
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection)}}
    count++
game()
    })
    })


    
    
    


   
        
