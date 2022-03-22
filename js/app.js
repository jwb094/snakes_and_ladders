const Target = 100;
let playerturn =true,
computerturn = 1,
playerposition = 1,
computerposition,
landonladder = false,
landonsnakes = false;
displaySteps();

/**
 * Display Numbers on Steps
 */
function displaySteps(){
    let Steps =document.querySelectorAll('.box');
    Steps.forEach((step,i,a) => {
        step.innerHTML = `<h6>${100 - i}</h6>`;      
    });
}

document.getElementById('dice').addEventListener("click",playerTurn);



function playerTurn(){

    playerposition =  diceRoll(playerposition);
}

function computerTurn(){
    computerturn = diceRoll(computerturn);
}

function checkForSnakesAndLadders(){}



function diceRoll(player_position){
    let player_position = Math.floor(Math.random() * 6) + 1;
    return player_position;
}
function WhosWon(){}