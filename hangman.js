var POSSIBLE_WORDS = ["obdurate", "verisimilitude", "defenestrate", "obsequious", "dissonant", "toady", "idempotent"];

var MAX_GUESSES = 6;
var word = "";
var guesses=""; //variable storing the guesses letters
var guess_count = MAX_GUESSES;

var inputBox = document.getElementById("guess");
var guessButton = document.getElementById("guessButton");

inputBox.disabled = false;
guessButton.disabled = false;

function newGame(){
    var inputBox = document.getElementById("guess");
    var guessButton = document.getElementById("guessButton");

    inputBox.disabled = false;
    guessButton.disabled = false;

    var randomIndex = parseInt(Math.random() * POSSIBLE_WORDS.length);
    word = POSSIBLE_WORDS[randomIndex];
    guesses="";
    guess_count = MAX_GUESSES;
    updatePage();
    var textInput = document.getElementById("guess");
    textInput.value = "";
}

function guessLetter(){
    //Do stuff
    var input = document.getElementById("guess");
    var letter = input.value;
    if (guesses.indexOf(letter) < 0){
        guesses += letter;
        if (word.indexOf(letter) < 0){
            guess_count --;
        }
        updatePage();
    }
    input.value = "";
}

function updatePage(){
    var inputBox = document.getElementById("guess");
    var guessButton = document.getElementById("guessButton");

    var clueString = "";
    for (var i = 0; i < word.length; i++){
        var currentLetter = word.charAt(i);
        if (guesses.indexOf(currentLetter) >= 0){
            clueString += currentLetter + " ";
        }
        else{
            clueString += "_ ";
        } 
    }

    // update the clue string
    var clue = document.getElementById("clue");
    clue.innerHTML = clueString;

    // update the guesses from the user
    var guessArea = document.getElementById("guesses");
    guessArea.innerHTML = "Guessed Letters: " + guesses;

    // update the image 
    var image = document.getElementById("hangmanImage");
    image.src= "images/hangman" + guess_count + ".gif";

    if (guess_count <= 0){
        // guess is replaced with the losing message along with the intial word - once the user has run out of guesses
        guessArea.innerHTML = "You lost! The word was: " + word;
        inputBox.disabled = true;
        guessButton.disabled = true;
    }
    else if (clueString.indexOf("_") < 0){
        // guessArea is replaced with the winning message once the user has guessed all letters
        guessArea.innerHTML = "Congratulations! You won";
        inputBox.disabled = true;
        guessButton.disabled = true;
    }
    
}