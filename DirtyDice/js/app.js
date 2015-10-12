$(function(){
  setUp();
})

var playerOneTotal = 0
var playerOneRolls = []
var playerTwoTotal = 0
var playerTwoRolls = []
var turn           = 1

function setUp(){
  whosTurn.innerHTML = "Player One's turn"
  document.getElementById('diceRoll').addEventListener("click", rollDice);
}

function rollDice(){
  var whosTurn  = document.getElementById("whosTurn");
  var die1      = document.getElementById("die1");
  var die2      = document.getElementById("die2");
  var status    = document.getElementById("status");
  var play1     = document.getElementById("p1Total");
  var play2     = document.getElementById("p2Total");
  var d1        = Math.floor(Math.random() * 6) + 1;
  var d2        = Math.floor(Math.random() * 6) + 1;
  var diceTotal = d1 + d2;

  if(playerOneRolls.length === 0 || playerOneRolls.length % 3 !== 0 || playerOneRolls.length === playerTwoRolls.length){
    die1.innerHTML = d1;
    die2.innerHTML = d2;
    playerOneRolls.push([d1, d2])
    playerOneTotal += diceTotal
    console.log(playerOneRolls);
    $("#playerOneRolls").append("<li>Throw "+playerOneRolls.length+": "+d1 + " & "+ d2+"</li>")
    status.innerHTML = "Player One Rolled " +d1+ " & " +d2;
    play1.innerHTML = playerOneTotal;
    
    if(d1 == d2){
      status.innerHTML += " - You rolled DOUBLES! ";
    }
    
    if(playerOneRolls.length % 3 === 0){
      whosTurn.innerHTML = "Player Two's turn"
    }
  
  }else{
    die1.innerHTML = d1;
    die2.innerHTML = d2;
    playerTwoRolls.push([d1, d2])
    playerTwoTotal += diceTotal
    console.log(playerTwoRolls);
    $("#playerTwoRolls").append("<li>Throw "+playerTwoRolls.length+": "+d1 + " & "+ d2+"</li>")
    status.innerHTML = "Player Two Rolled " +d1+ " & " +d2;
    play2.innerHTML = playerTwoTotal;
    if(d1 == d2){
      status.innerHTML += " - You rolled DOUBLES! ";
    }
    if(playerTwoRolls.length % 3 === 0){
      whosTurn.innerHTML = "Player One's turn"
    }
  }
}
//build a function to store the results of each round
// player one rolls 3 times move from playerOneRolls to playerOneRound
// $('#playerOneRound').append("<li>" + playerOneTotal + "</li>")

// player two rolls 3 times move from playerTwoRolls to playerOneRound
// $('#playerTwoRound').append("<li>" + playerTwoTotal + "</li>")



