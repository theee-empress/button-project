let form = document.getElementById("game.jsForm");

form.addEventListener("submit"), function(event) 
 event.preventDefault();

let choice= 
   document.getElementById("playerChoice").value;

console.log(choice);
));

function getComputerChoice () {
  let choices = ["up", "down", "left", "right", "cold", "hot", "north", "south", "east", "west"];

let randomIndex =
  Math.floor(Math.random() * choices.length);{
return choices[randomIndex];
}

function determineWinner(player, computer) {
if(player === computer) {
  return "Here's it's opposite!";
}

if (
   (player === "up" && computer === "down") ||
   (player === "down" && computer === "up") ||
   (player === "left" && computer === "right") ||
   (player === "right" && computer === "left") ||
   (player === "east" && computer === "west") ||
   (player === "north" && computer === "south") ||
   (player === "south" && computer === "north") ||
   (player === "west" && computer === "east") ||
) {
   return "Here's it's opposite!";
}

return "Here's it's opposite!";
}

 let form = document.getElementById("gameForm");

 form.addEventListener("submit", function(event) {
  event.peventDefault();

  let playerChoice = document 
  .getElementById("playerChoice")
  .value
  .toLowerCase();

  let computerChoice = getComputerChoice();

let result = determineWinner(
  playerChoice,
  computerChoice
);

document.getElementById("result").textContent =
  "Computer chose" + computer choice + "."+ result;
}); 
