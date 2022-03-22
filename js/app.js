const Target = 100;
let playerturn,computerturn,playerposition,computerposition,landonladder,landonsnakes;
displaySteps();

function displaySteps(){
    let Steps =document.querySelectorAll('.box');
    Steps.forEach((step,i,a) => {
        step.innerHTML = `<h6>${100 - i}</h6>`;      
    });
}


function playerTurn(){}
function checkForSnakesAndLadders(){}
function computerTurn(){}
function checkForSnakesAndLadders(){}
function WhosWon(){}