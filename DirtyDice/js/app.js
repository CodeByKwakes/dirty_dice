$(setUp);

var player         = 0,
    numberOfRolls  = 0,
    numberOfRounds = 1,
    rollsPerRound  = 3,
    rolls          = [[], []],
    totals         = [0, 0],
    d1, 
    d2,
    diceTotal,
    dice = [null, "one", "two", "three", "four", "five", "six"];

function setUp(){
  $('#diceRoll').on("click", play);
  $("header").on("click", "#reset", reset);
}

function changePlayer(){
  return numberOfRolls < 3;
}

function newRoundCheck(){
  return numberOfRolls === 5;
}

function end(){
  return numberOfRounds === 6;
}

function gameOver(){
  if (end()) {
    var winner = totals[0] > totals[1] ? "1" : "2";
    $("#status").html("Player "+winner+" won with a score of "+totals[winner-1]);
    $("#diceRoll").hide();
    $("header").append("<button id='reset'>Play Again</button>");
  }
}

function newRound(){
  if (newRoundCheck()) {
    $("#player_0_rolls").empty();
    $("#player_1_rolls").empty();
    $("#player_0_roundstotal").append("<li>Round "+ numberOfRounds +": " + totals[0] + "</li>");
    $("#player_1_roundstotal").append("<li>Round "+ numberOfRounds +": " + totals[1] + "</li>");
    numberOfRolls = 0;
    numberOfRounds++;
  } else {
    numberOfRolls++;
  }
}

function increaseTotal() {
  totals[player] += diceTotal;
  return $("#player_"+player+"_total").html(totals[player]);
}

function updateRolls(){
  var string = "<li class='dice'>"+
                 "<div class='die "+dice[d1]+"'></div>" +
                 "<div class='die "+dice[d2]+"'></div>" +
               "</li>"
  return $("#player_"+player+"_rolls").prepend(string);
}

function updateStatus(){
  return $("#status").html("Player " + (parseInt(player)+1) + " Rolled: " + diceTotal);
}

function storeRolls(){
  return rolls[player].push([d1, d2]);
}

function checkForDoubles(){
  if (d1 === d2) {
    $("#status").html($("#status").html() + " - You threw DOUBLES!");
    totals[player] += diceTotal;
  }
}

function choosePlayer(){
  player = changePlayer() ? 0 : 1;
  return player;
}

function displayDice(){
  $("#dice").empty();
  $("#dice").append("<div class='die "+dice[d1]+"'></div>");
  $("#dice").append("<div class='die "+dice[d2]+"'></div>");
}

function rollDice(){
  d1 = Math.floor(Math.random() * 6) + 1;
  d2 = Math.floor(Math.random() * 6) + 1;
  diceTotal  = d1 + d2;
  displayDice();
}

function reset(){
  player         = 0;
  numberOfRolls  = 0;
  numberOfRounds = 1;
  rollsPerRound  = 3;
  rolls          = [[], []];
  totals         = [0, 0];
  d1;
  d2;
  diceTotal;
  $("#player_0_total").empty();
  $("#player_1_total").empty();
  $("#player_0_rolls").empty();
  $("#player_1_rolls").empty();
  $("#player_0_roundstotal").empty();
  $("#player_1_roundstotal").empty();
  $("#die1").empty();
  $("#die2").empty();
  $("#status").html("Are you feeling lucky?");
  $("#reset").remove();
  $("#diceRoll").show();
}

function play(){
  if (end()) return false;
  rollDice();
  choosePlayer()
  storeRolls();
  updateRolls();
  updateStatus();
  checkForDoubles();
  increaseTotal();
  newRound();
  gameOver();
}