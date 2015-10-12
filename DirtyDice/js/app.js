$(function(){
    setUp();
})

function setUp(){
    document.getElementById('diceRoll').addEventListener("click", rollDice);
}

function rollDice(){
    var die1 = document.getElementById("die1");
    var die2 = document.getElementById("die2");
    var status = document.getElementById("status");
    var d1 = Math.floor(Math.random() * 6) + 1;
    var d2 = Math.floor(Math.random() * 6) + 1;
    // console.log(d1 + " & " + d2);
    // console.log("Dice 1: " + d1 + " & Dice 2: " + d2);
    var diceTotal = d1 + d2;
    die1.innerHTML = d1;
    die2.innerHTML = d2;
    status.innerHTML = "Player One rolled "+diceTotal+".";
    if(d1 == d2){
        status.innerHTML += " DOUBLES! ";
    }
}



