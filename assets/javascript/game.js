// VARIABLES
var userGuesses = [];


// FUNCTIONS
// function initHangman() {
//     // Records all pressed keys 

//     // Checks if inputted character is in the word

//         // Based on the check, number of guesses goes down OR letter is revealed
    
//     // Game completes scenarios

// }

// This function checks to see if inputed character is in the array.
// function checkArray (guess) {
//     // Based on the character:

//         // If character is not in the array, push the character to the array.
//         for (var i = 0; userGuesses.length>0; i++) {
//             if (userGuesses[i] === guess) {
//                 userGuesses.pop();
//                 console.log("Value already in array.")
//             }

//         }
//     }
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
    
    userGuesses.push(guess);

    // checkArray(guess);
    
    console.log(userGuesses)
}
