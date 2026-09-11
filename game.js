const opposites = {
  "up": "down", "down": "up",
  "left": "right", "right": "left",
  "cold": "hot", "hot": "cold",
  "north": "south", "south": "north",
  "east": "west", "west": "east",
  "fast": "slow", "slow": "fast",
  "hi": "bye", "bye": "hi",
  "big": "small", "small": "big",
  "stop": "go", "go": "stop"
};

function getComputerChoice(playerChoice) {
  if (opposites[playerChoice]) {
    return opposites[playerChoice];
  }


let choices = Object.keys(opposites);
  let randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(player, computer) {
  if (player === computer) {
    return "You tied! You picked the exact same thing.";
  }
 if (opposites[player] === computer) {
    return "Nice! Here's its opposite!";
  }

  return "Not an opposite. Try again!"; 
}

let form = document.getElementById("game.jsForm");
form.addEventListener("submit", function(event) {
  event.preventDefault(); 

  let playerChoice = document 
    .getElementById("playerChoice")
    .value
    .toLowerCase()
    .trim();
    let computerChoice = getComputerChoice(playerChoice);

  let result = determineWinner(playerChoice, computerChoice);
 
  document.getElementById("result").textContent =
    "Computer chose " + computerChoice + ". " + result;
});
