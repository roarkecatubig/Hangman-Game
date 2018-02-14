// VARIABLES
var userGuesses = [];
var guessString;
var gameArray =[];
var splitCharWord = [];
var blankSpaces = [];
var strungWord;
var brokenWord = []
var wordBank = ["KAMINO", "TAKODANA", "KASHYYK"];
var remainingGuesses = 12;


// FUNCTIONS
// This function begins the main game.
function beginGame() {
    console.log("Game started")
    randomWord();
    splitString();
    emptyBlanks();
    guessRepeat();

}

function guessRepeat() {
    document.onkeyup = function (event) {
        var guess = String.fromCharCode(event.which).toUpperCase();
        if (userGuesses.length === 0) {
            userGuesses.push(guess);
            guessesString = userGuesses.join();
            console.log("userGuesses: " + userGuesses);
            guessesCheck(guess);

        }
        else if (guessesString.includes(guess) === true) {
            console.log("Letter already used.")
            console.log("userGuesses: " + userGuesses)
            console.log("guessesString: " + guessesString)
        }

        else {
            userGuesses.push(guess);
            guessesString = userGuesses.join()
            console.log("userGuesses: " + userGuesses)
            console.log("guessesString: " + guessesString)
            guessesCheck(guess);
        }
    }

}

// This function randomly chooses a word for the game
function randomWord() {
    var random = wordBank[Math.floor(Math.random()*wordBank.length)];
    gameArray.push(random);
    console.log(random)
}

// This function splits up the words in the "wordBank" function and puts them into an array as individual characters. 
function splitString() {
    var s = gameArray[0];
    splitCharWord = s.split("");
    makeString(splitCharWord);
    // var brokenWord = s.split("");
    // console.log(brokenWord);
}

function makeString(splitCharWord) {
    strungWord = splitCharWord.join()
    console.log(strungWord);
}

function guessesCheck (guess) {
    if (strungWord.includes(guess)) {

    }
}

function emptyBlanks() {
    for (i=0; i<splitCharWord.length; i++) {
        blankSpaces[i] = "_";
    }

    console.log(blankSpaces)

    blanksTogether = blankSpaces.join(" ");
    document.getElementById("word-blanks").innerhTML = blanksTogether;
}


// function checkCharacter(guess) {
//     for (i = 0; i < brokenWord.length(); i++)
//         if (guess === brokenWord[i])

// }



function sliceArray(wordBank) {
    for (i = 0; i < wordBank.length; i++) {
        var sepBank = wordBank.slice();
        splitString(sepBank[i])
    }
    console.log(wordBank.slice())
}


// This function creates blank spaces on the page equal to the number of items in the splitString array




// function initHangman() {
//     // Records all pressed keys 

//     // Checks if inputted character is in the word

//         // Based on the check, number of guesses goes down OR letter is revealed
    
//     // Game completes scenarios

// }

// This function checks to see if inputed character is in the array.
// function checkArray (guess) {
    
//     // Based on the character:

//     // If character is not in the array, push the character to the array.
//     for (var i = 0; i<userGuesses.length; i++) {
//         if (userGuesses[i] === guess) {
//             userGuesses.push(guess);
//             userGuesses.pop();
//             console.log("Value already in array.")
//         }

//         else {
//             userGuesses.push(guess);
//         }

//     }
// }

// If character is in the array, does not push character into the array.

// }

// This function checks the win conditionals
// function ???? () {

//         // Conditional if guesses left = 0

//         // Conditional if all letters in mystery word are revealed
// }

// MAIN PROCESS
document.onkeyup = beginGame;
    // var guess = String.fromCharCode(event.which).toUpperCase();
    // userGuesses.push(guess)
    // console.log(userGuesses)

