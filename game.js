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

let form = document.getElementById("gameForm");

form.addEventListener("submit", function(event) {
  event.preventDefault();

   let playerChoice = document 
    .getElementById("playerChoice")
    .value
    .toLowerCase()
    .trim();

  let resultElement = document.getElementById("result");

                      if (opposites[playerChoice]) {
    let computerChoice = opposites[playerChoice];
    
    resultElement.textContent = 
      "Computer chose " + computerChoice + ". Nice! Here's its opposite!";
  } else {

   resultElement.textContent = 
      "That word isn't in the game. Please enter a valid choice!";
  }
});
