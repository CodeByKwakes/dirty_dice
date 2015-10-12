$(setUp);

var player         = 0;
var numberOfRolls  = 0;
var numberOfRounds = 1;
var rollsPerRound  = 3;
var rolls          = [[], []];
var totals         = [0, 0];

function setUp(){
  $('#diceRoll').on("click", play);
}

function changePlayer(){
  return numberOfRolls < 3;
}

function newRound(){
  return numberOfRolls === 6;
}

function rollDice(){
  return Math.floor(Math.random() * 6) + 1;
}

function play(){
  var d1         = rollDice();
  var d2         = rollDice();
  var diceTotal  = d1 + d2;
  
  $("#die1").html(d1);
  $("#die2").html(d2);

  player = changePlayer() ? 0 : 1;
  next   = (player === 0) ? 1 : 0;

  rolls[player].push([d1, d2]);
  totals[player] += diceTotal;

  $("#player_"+player+"_rolls").append("<li>Throw "+rolls[player].length+": " + d1 + " & "+ d2+"</li>")

  $("#status").html("Player " + player + " Rolled " +d1+ " & " +d2);

  // Add the total
  $("#player_"+player+"_total").html(totals[player]);
  
  if (d1 === d2) {
    $("#status").html($("#status").html() + " - You threw DOUBLES!");
  }
  
  if(newRound()) {
    numberOfRolls = 0;
    numberOfRounds++;
    player = 0;

    $("#player_0_roundstotal").append("<li>Round "+ numberOfRounds +": " + totals[0] + "</li>");
    $("#player_1_roundstotal").append("<li>Round "+ numberOfRounds +": " + totals[1] + "</li>");
  }

  numberOfRolls++;
}

// var playerOneTotal = 0;
// var playerTwoTotal = 0;
// var playerTwoRolls = [];
// var playerOneRolls = [];
// var turn           = 1;
// var roundNum       = 1;

//   player = 0
//   rolls    = playerOneRolls;
//   total    = playerOneTotal;
//   selector = "#playerOneRolls";
//   col      = "#playerOneRoundCol";
//   player   = "1"; 
//   next     = "2";
//   score    = play1;
// } else {
//   rolls    = playerTwoRolls;
//   total    = playerTwoTotal;
//   selector = "#playerTwoRolls";
//   col      = "#playerTwoRoundCol";
//   player   = "2"; 
//   next     = "1";
//   score    = play2;
// }

//   // player 1
//   die1.innerHTML = d1;
//   die2.innerHTML = d2;
//   playerOneRolls.push([d1, d2])
//   playerOneTotal += diceTotal
//   $("#playerOneRolls").append("<li>Throw "+playerOneRolls.length+": "+d1 + " & "+ d2+"</li>")
//   status.innerHTML = "Player One Rolled " +d1+ " & " +d2;
//   play1.innerHTML = playerOneTotal;
  
//   if(d1 == d2){
//     status.innerHTML += " - You threw DOUBLES! ";
//   }
  
//   if(playerOneRolls.length % 3 === 0){  //cange this to  == 3
//     whosTurn.innerHTML = "Player Two's turn"
//     $('#playerOneRoundCol').append("<li>Round "+ roundNum +": " + playerOneTotal + "</li>")
//   }

// }else{
//   //player 2
//   die1.innerHTML = d1;
//   die2.innerHTML = d2;
//   playerTwoRolls.push([d1, d2])
//   playerTwoTotal += diceTotal
//   $("#playerTwoRolls").append("<li>Throw "+playerTwoRolls.length+": "+d1 + " & "+ d2+"</li>")
//   status.innerHTML = "Player Two Rolled " +d1+ " & " +d2;
//   play2.innerHTML = playerTwoTotal;
  
//   if(d1 == d2){
//     status.innerHTML += " - You threw DOUBLES! ";
//   }
//   if(playerTwoRolls.length % 3 === 0){
//     whosTurn.innerHTML = "Player One's turn"
//     $('#playerTwoRoundCol').append("<li>Round "+ roundNum +": " + playerTwoTotal + "</li>")
//     roundNum++
//     playerOneTotal = 0
//     playerTwoTotal = 0
//     $('#playerOneRolls').html("")
//     $('#playerTwoRolls').html("")
//   }
// }