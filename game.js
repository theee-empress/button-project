let form = document.getElementById("gameForm");

form.addEventListener("submit"), function(event) 
 event.preventDefault();

let choice= 
   document get.ElementById("playerChoice").value;

console.log(choice);
));

function getComputerChoice () {
  let choices = ["up", "down", "left", "right", "cold", "hot", "north, "south", "east", "west"];

let randomIndex =
  Math.floor(Math.random() * choices.length);{
reutrn choices[randomIndex];
}

function determineWinner(player, computer) {
if(player === computer) {
  return "Here's it's opposite!";
}

if (
   (player === "rock" && computer === "scissors) ||
   (player === "paper"&& computer === "rock") ||
   (player === "scissors" && computer === "paper") 
) {
   return "You win!";
}

return "Computer wins!";
}
