var POSSIBLE_WORDS = ["obdurate", "verisimilitude", "defenestrate", "obsequious", "dissonant", "toady", "idempotent"];

var word = "";

// start new games 
// Write out the spaces for the letters using for loop
// display the string of _ in html

function newGame(){
    var randomIndex = parseInt(Math.random() * POSSIBLE_WORDS.length);
    word = POSSIBLE_WORDS[randomIndex];

    var clueString = "";
    for (var i = 0; i < word.length; i++){
        clueString += "_ ";
    }

    var clue = document.getElementById("clue");
    clue.innerHTML = clueString;
}