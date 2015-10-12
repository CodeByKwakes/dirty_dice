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
  return numberOfRolls === 5;
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

  $("#status").html("Player " + (parseInt(player)+1) + " rolled " + diceTotal);

  // Add the total
  $("#player_"+player+"_total").html(totals[player]);
  
  if (d1 === d2) {
    $("#status").html($("#status").html() + " - You threw DOUBLES!");
  }
  
  if (newRound()) {
    $("#player_0_roundstotal").append("<li>Round "+ numberOfRounds +": " + totals[0] + "</li>");
    $("#player_1_roundstotal").append("<li>Round "+ numberOfRounds +": " + totals[1] + "</li>");
    numberOfRolls = 0;
    numberOfRounds++;
  } else {
    numberOfRolls++;
  }

  if (numberOfRounds === 6) return alert("Game Over");
}