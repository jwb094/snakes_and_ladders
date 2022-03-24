var target = 100;
let playerturn =true,
computerturn = true,
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
        console.log(i);
        step.innerHTML = `<h6>${100 - i}</h6>`;     
        if(i == 99){
            step.innerHTML =`<div id="P1"><p>P1</p></div><div id="CPU">CPU</div>`;
        } 
    });
    const thirdLink = document.querySelector(".box:nth-child(3)");
   


}

document.getElementById('dice').addEventListener("click",playerTurn);


/**
 * playerTurn()
 * 
 */
function playerTurn(){

    let prev_position = playerposition;
    let dice =  diceRoll(playerposition);
    playerposition = playerposition + dice;
    console.log(`previous Prev is ${prev_position} new position is ${playerposition}`);
    positionMove("P1",playerposition);
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


function positionMove(player,NewPos){
    //remove element
    setInterval(function() {
        document.getElementById('P1').remove()
    },3000);
    //create new element in new psoition
    setInterval(function(){
       let new_position =  document.createElement("div");

       // and give it some content
        const newContent = document.createTextNode("P1");

        // add the text node to the newly created div
        new_position.appendChild(newContent);

    },3000)
}

function checkForSnakesAndLadders(){
    const snakes = [];
    const ladders = [];
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

    return winner = playerposition === target ?  'Player 1 wins':
                        computerposition === target ? 'CPU wins': 
                         'No one winning';
    

}