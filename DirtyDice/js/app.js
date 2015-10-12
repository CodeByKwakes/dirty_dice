$(function(){
  setUp();
})

var playerOneTotal = 0
var playerOneRolls = []
var playerTwoTotal = 0
var playerTwoRolls = []
var turn           = 1
var roundNum       = 1

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
    // player 1
    die1.innerHTML = d1;
    die2.innerHTML = d2;
    playerOneRolls.push([d1, d2])
    playerOneTotal += diceTotal
    $("#playerOneRolls").append("<li>Throw "+playerOneRolls.length+": "+d1 + " & "+ d2+"</li>")
    status.innerHTML = "Player One Rolled " +d1+ " & " +d2;
    play1.innerHTML = playerOneTotal;
    
    if(d1 == d2){
      status.innerHTML += " - You threw DOUBLES! ";
    }
    
    if(playerOneRolls.length % 3 === 0){  //cange this to  == 3
      whosTurn.innerHTML = "Player Two's turn"
      $('#playerOneRoundCol').append("<li>Round "+ roundNum +": " + playerOneTotal + "</li>")
    }

  }else{
    //player 2
    die1.innerHTML = d1;
    die2.innerHTML = d2;
    playerTwoRolls.push([d1, d2])
    playerTwoTotal += diceTotal
    $("#playerTwoRolls").append("<li>Throw "+playerTwoRolls.length+": "+d1 + " & "+ d2+"</li>")
    status.innerHTML = "Player Two Rolled " +d1+ " & " +d2;
    play2.innerHTML = playerTwoTotal;
    
    if(d1 == d2){
      status.innerHTML += " - You threw DOUBLES! ";
    }
    if(playerTwoRolls.length % 3 === 0){
      whosTurn.innerHTML = "Player One's turn"
      $('#playerTwoRoundCol').append("<li>Round "+ roundNum +": " + playerTwoTotal + "</li>")
      roundNum++
      playerOneTotal = 0
      playerTwoTotal = 0
      $('#playerOneRolls').html("")
      $('#playerTwoRolls').html("")
    }
  }
}


// function gameScoreBoard(){
//     document.getElementById("playerOneGame"). = +playerOneTotal
//   }

  // document.getElementById("playerOneGame"). = +playerOneTotal;
  // document.getElementById("playerTwoGame");
  // gameScore1.innerHTML = playerOneRolls;
  // gameScore2.innerHTML = playerTwoTotal;

  




