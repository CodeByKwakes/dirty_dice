// Dirty Dice
// the objective of the game is to achieve the highest score after 5 rounds.
// each player get 3 throws per round
// after the 3rd throw the total round score is added (plus probabilty bonus)
//

// player roll function

var rollbutton = document.getElementById("playerOne");
rollbutton.addEventListener("click", updateDiceValues)

function updateDiceValues(){
  var dice1 = rollDice()
  var dice2 = rollDice()
  console.log(dice1 + " & " + dice2)
  console.log("Dice 1: " + dice1 + " & Dice 2: " + dice2)
}

function rollDice(){
  return Math.ceil(Math.random()*6);
}

