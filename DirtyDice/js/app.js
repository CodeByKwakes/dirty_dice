$(function(){
  setUp();
})

var playerOneTotal = 0
var playerOneRolls = []
var playerTwoTotal = 0
var playerTwoRolls = []
var turn           = 1


function setUp(){
  whosTurn.innerHTML = "Player one's turn"
  document.getElementById('diceRoll').addEventListener("click", rollDice);
}

function rollDice(){
  var whosTurn = document.getElementById("whosTurn")
  var die1 = document.getElementById("die1");
  var die2 = document.getElementById("die2");
  var status = document.getElementById("status");
  var d1 = Math.floor(Math.random() * 6) + 1;
  var d2 = Math.floor(Math.random() * 6) + 1;
  var diceTotal = d1 + d2;

  if(playerOneRolls.length === 0 || playerOneRolls.length % 3 !== 0 || playerOneRolls.length === playerTwoRolls.length){
    die1.innerHTML = d1;
    die2.innerHTML = d2;
    playerOneRolls.push([d1, d2])
    playerOneTotal += diceTotal
    console.log(playerOneRolls)
    $("#playerOneRolls").append("<li>"+d1 + ", "+ d2+"</li>")
    status.innerHTML = "Player one rolled "+playerOneTotal+".";
    if(d1 == d2){
      status.innerHTML += " DOUBLES! "+playerOneTotal+".";
    }
    if(playerOneRolls.length % 3 === 0){
      whosTurn.innerHTML = "Player two's turn"
    }
  }else{
    die1.innerHTML = d1;
    die2.innerHTML = d2;
    playerTwoRolls.push([d1, d2])
    playerTwoTotal += diceTotal
    console.log(playerTwoRolls)
    $("#playerTwoRolls").append("<li>"+d1 + ", "+ d2+"</li>")
    status.innerHTML = "Player two rolled "+playerTwoTotal+".";
    if(d1 == d2){
      status.innerHTML += " DOUBLES! "+playerTwoTotal+".";
    }
    if(playerTwoRolls.length % 3 === 0){
      whosTurn.innerHTML = "Player ones's turn"
    }
  }

}




