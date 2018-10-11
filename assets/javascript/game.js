// the computer will pick a random word 
var userOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerOptions = ["bat", "car", "fan", "cup", "mop"];
var computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];

// for verifying functionality
console.log("Computer choice: " + computerChoice);

// setting up variables
var numWins = 0;
var numLosses = 0;
var attempts = 12;

// this array will store the letters already guessed
var guesses = [];

// this function will reset the game after a win or loss
function resetGame() {
    attempts = 12;
    attemptsText.textContent = attempts;
    guesses = [];
    guessesText.textContent = guesses;
    computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];
    console.log(computerChoice);
}

// assigning variables to the HTML elements we're changing
var winsText = document.getElementById("wins");
var wordDisplay = document.getElementById("word-display");
var attemptsText = document.getElementById("guesses-left");
var guessesText = document.getElementById("already-guessed");

for (var i = 0; i < computerChoice.length; i++) {
    wordDisplay.append("-");
}

document.onkeyup = function(event) {
    var letter = event.key.toLowerCase();

    // checking that the input is a letter
    if (userOptions.indexOf(letter) > -1) {
        // checking if the input is in the computer's word
        if (computerChoice.indexOf(letter) > -1) {
            wordDisplay[computerChoice.indexOf(letter)] = letter;
        } else {
            attempts -= 1;
            attemptsText.textContent = attempts;
            guesses += letter;
            guessesText.textContent = guesses;
        }

        // conditions for a loss
        if (attempts === 0) {
            numLosses += 1;
            // lossesText.textContent = numLosses;
            resetGame();
        }
    }
}