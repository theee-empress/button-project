function getComputerChoice() {
  let choices = ["up", "down", "left", "right", "cold", "hot", "north", "south", "east", "west"];
  let randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(player, computer) {
  if (player === computer) {
    return "You tied! You picked the exact same thing.";
  }


  if (
    (player === "up" && computer === "down") ||
    (player === "down" && computer === "up") ||
    (player === "left" && computer === "right") ||
    (player === "right" && computer === "left") ||
    (player === "east" && computer === "west") ||
    (player === "west" && computer === "east") ||
    (player === "north" && computer === "south") ||
    (player === "south" && computer === "north") ||
    (player === "hot" && computer === "cold") ||
    (player === "cold" && computer ==="hot") ||
    (player === "fast" && computer === "slow") ||
    (player === "slow" && computer === "fast") ||
    (player === "big" && computer === "small") ||
    (player === "small" && computer "big") ||
    (player === "go" && computer "stop") ||
    (player === "stop" && computer "go") ||
    (player === "bye" && computer "hi") ||
    (player === "hi" && computer "bye") 
  ) {
    return "Nice! Here's its opposite!";
  }

   return "Not an opposite. Try again!"; 
}

let form = document.getElementById("gameForm");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // Stops page from reloading

  let playerChoice = document 
    .getElementById("playerChoice")
    .value
    .toLowerCase()
    .trim();
  let computerChoice = getComputerChoice();

  let result = determineWinner(playerChoice, computerChoice);
 
 document.getElementById("result").textContent =
    "Computer chose " + computerChoice + ". " + result;
});

