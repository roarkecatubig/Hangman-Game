// VARIABLES
var userGuesses = [];
var gameWord =[];
var splitWord = "KAMINO";
var wordBank = ["KAMINO", "TAKODANA", "KASHYYK"];


// FUNCTIONS
// This function splits up the words in the "wordBank" function and puts them into an array as individual characters. 
function splitString(s) {
    var brokenWord = s.split("");
        //     for (i = 0; i <= sepBank)
        // var gameWord = splitWord.split("");
    console.log(brokenWord);
}

function sliceArray(wordBank) {
    for (i = 0; i < wordBank.length; i++) {
        var sepBank = wordBank.slice();
        splitString(sepBank[i])
    }
    console.log(wordBank.slice())
}

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
document.onkeyup = function(event) {
    var guess = String.fromCharCode(event.which).toUpperCase();
    userGuesses.push(guess)
    console.log(userGuesses)
}
