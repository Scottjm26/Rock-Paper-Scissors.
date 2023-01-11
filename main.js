let playerPoints = parseInt(document.getElementById("playerScore").innerHTML);
let computerPoints = parseInt(document.getElementById("computerScore").innerHTML);
let scoreMessage = document.getElementById('scoreMessage')
let roundMessage = document.getElementById('roundMessage')


let count = 1;
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
        scoreMessage.textContent = ("Tied")}
    else if (playerSelection == "rock" && computerSelection == "scissors"){
        ++playerPoints;
        count++;
        document.getElementById('playerScore').innerHTML = playerPoints;
         scoreMessage.textContent = ("You win this round "+ playerSelection+ " beats " +computerSelection)}
    else if (playerSelection == "paper" && computerSelection == "rock"){
        ++playerPoints;
        count++;
        document.getElementById('playerScore').innerHTML = playerPoints;
        scoreMessage.textContent = ("You win this round "+ playerSelection+ " beats " +computerSelection)}
    else if (playerSelection == "scissors" && computerSelection == "paper"){
        ++playerPoints;
        count++;
        document.getElementById('playerScore').innerHTML = playerPoints;
         scoreMessage.textContent = ("You win this round "+ playerSelection+ " beats " +computerSelection)}
    else {
        ++computerPoints;
        count++;
        document.getElementById('computerScore').innerHTML = computerPoints;
        scoreMessage.textContent = ("You lose this round "+ computerSelection + " beats " + playerSelection)}
    
    }


function game(){
     
     if (count >= 6 && playerPoints > computerPoints) {
     scoreMessage.textContent = ('Maximum rounds played. You are the Winner!')
    } 
    else if (count >= 6 && computerPoints > playerPoints) 
    {
    scoreMessage.textContent = ("The computer whooped your ass!")}
    else{	
    roundMessage.textContent =(`Round ${count}`);
    let playerSelection = button.id;
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection)}}
    
game()
    })
    })


    
    
    


   
        
