const Target = 100;
let playerturn =true,
computerturn = 1,
playerposition = 1,
computerposition,
landonladder = false,
landonsnakes = false,
ladders = [],
snakes = [];

displayStepsandCounters();

/**
 * Display Numbers on Steps
 */
function displayStepsandCounters(){
    let Steps =document.querySelectorAll('.box');
    Steps.forEach((step,i,a) => {
        step.innerHTML = `<h6>${100 - i}</h6>`;      
    });
}

document.getElementById('dice').addEventListener("click",playerTurn);


/**
 * playerTurn()
 * 
 */
function playerTurn(){


    let dice =  diceRoll(playerposition);
    playerposition = playerposition + dice;
    positionMove();
    checkForSnakesAndLadders();
    WhosWon();
    positionSwitch();
}

function computerTurn(){
    let dice = diceRoll(computerturn);
    computerturn = computerturn + dice;
    positionMove();
    checkForSnakesAndLadders();
    WhosWon();
    positionSwitch();
}


function positionMove(){

}

function checkForSnakesAndLadders(){

}

function positionSwitch(){
    
    if (playerturn) {
        playerturn = false;
        computerturn = true;
    } else {
        playerturn = true;
        computerturn = false;
    }
}

/**
 * diceRoll()
 * @param {*} player_position 
 * @returns  int between 1 and 6 
 */
function diceRoll(player_position){
     player_position = Math.floor(Math.random() * 6) + 1;
     //console.log(player_position);
    return player_position;
}
function WhosWon(){

    return winner = playerposition === total ?  'Player 1 wins':
                        computerposition === total ? 'CPU wins': 
                         'No one winning';
    


}