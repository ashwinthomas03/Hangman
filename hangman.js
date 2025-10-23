var POSSIBLE_WORDS = ["obdurate", "verisimilitude", "defenestrate", "obsequious", "dissonant", "toady", "idempotent"];

var MAX_GUESSES = 6;
var word = "";
var guesses=""; //variable storing the guesses letters
var guess_count = MAX_GUESSES;
var start = false;
var inputBox = document.getElementById("guess");
var guessButton = document.getElementById("guessButton");


// start new games 
// Write out the spaces for the letters using for loop
// display the string of _ in html
//guess a letter
//evaluate the string, press the button
//add to guesses screen
//Update the screen to update pic/_ string

function newGame(){
    start = true;
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
    if (start == false){
        inputBox.disabled = true;
        guessButton.disabled = true;
    }
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
    //update the clue string
    var clue = document.getElementById("clue");
    clue.innerHTML = clueString;

    //update the guesses from the user
    var guessArea = document.getElementById("guesses");
    guessArea.innerHTML = "Guessed Letters: " + guesses;

    //update the image 
    var image = document.getElementById("hangmanImage");
    image.src= "images/hangman" + guess_count + ".gif";

}

//commite each individual feature and then work on next feature
//dont let same guess to happen, just ignore it
//show that you won, or loss, -> it says so and stop guess after we win/loss doesnt take input anymore
//when guesscount is 0, say you lost
//when there are no _ left, say you won
