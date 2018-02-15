// VARIABLES
var userGuesses = [];
var incorrectGuesses = [];
var guessString;
var gameArray =[];
var splitCharWord = [];
var blankSpaces = [];
var blanksTogether; 
var strungWord;
var brokenWord = []
var wordBank = ["KAMINO", "TAKODANA", "KASHYYK", "NABOO", "JAKKU", "ENDOR", "HOTH", "TATOOINE", "CRAIT"];
var remainingGuesses = 12;
var wins = 0;
var losses = 0;
var turnCount = 0;

// FUNCTIONS
// This function begins the main game.
function beginGame() {
    console.log("Game started")
    document.querySelector("#game-prompts").innerHTML = "NEW GAME STARTED";
    turnCount = 0;
    remainingGuesses = 12;
    userGuesses = [];
    incorrectGuesses = [];
    document.querySelector("#wrong-guesses").innerHTML = incorrectGuesses;
    document.querySelector("#guesses-left").innerHTML = remainingGuesses;
    splitCharWord = [];
    randomWord();
    splitString();
    emptyBlanks();
    guessRepeat();

}

function guessRepeat() {
    document.onkeyup = function (event) {
        turnCount = turnCount + 1;
        var guess = String.fromCharCode(event.which).toUpperCase();
// This part accounts for the very first key press due to some errors of not recording the first guess. 
        if (userGuesses.length === 0) {
            userGuesses.push(guess);
            guessesString = userGuesses.join();
            console.log("userGuesses: " + userGuesses);

            // If the guessed character is in the array, it'll do a further check to see what indexes the guessed character it's in.
            if (splitCharWord.includes(guess) === true) {
                for (i = 0; i < splitCharWord.length; i++) {
                    if (guess === splitCharWord[i]) {
                        blankSpaces[i] = guess;
                        var blanksTogether = blankSpaces.join(" ");
                        document.querySelector("#word-blanks").innerHTML = blanksTogether;
                        console.log(blankSpaces);
                        document.querySelector("#game-prompts").innerHTML = "TURN " + turnCount + ": YOU'RE GETTING CLOSER. KEEP GOING";
                        winCondition();
                        } 
                    }              
            }

            // If the guessed character is not in the array, it will subtract from remaining guesses and cycle back waiting for next input. 
            else {
                remainingGuesses = remainingGuesses - 1;
                incorrectGuesses.push(guess);
                console.log(remainingGuesses);
                console.log("Wrong Guesses: " + incorrectGuesses);
                document.querySelector("#game-prompts").innerHTML = "TURN " + turnCount + ": WRONG GUESS. TRY AGAIN";
                document.querySelector("#wrong-guesses").innerHTML = incorrectGuesses;
                document.querySelector("#guesses-left").innerHTML = remainingGuesses;
                winCondition();
            }
        }
// This part accounts for if a letter has already been inputted into the game. 
        else if (guessesString.includes(guess) === true) {
            console.log("Letter already used.")
            document.querySelector("#game-prompts").innerHTML = "TURN " + turnCount + ": YOU ALREADY USED THAT LETTER. TRY AGAIN";
            console.log("userGuesses: " + userGuesses)
            console.log("guessesString: " + guessesString)
            guessRepeat();
        }

// This part accounts for guesses from the second guess onward. 
        else {
            userGuesses.push(guess);
            guessesString = userGuesses.join()
            console.log("userGuesses: " + userGuesses)
            console.log("guessesString: " + guessesString)
            
            if (splitCharWord.includes(guess) === true) {
                for (i = 0; i < splitCharWord.length; i++) {
                    if (guess === splitCharWord[i]) {
                        blankSpaces[i] = guess;
                        var blanksTogether = blankSpaces.join(" ");
                        document.querySelector("#game-prompts").innerHTML = "TURN " + turnCount + ": YOU'RE GETTING CLOSER. KEEP GOING";
                        document.querySelector("#word-blanks").innerHTML = blanksTogether;
                        console.log(blankSpaces);
                        winCondition();
                        } 
                    }              
            }

            else {
                remainingGuesses = remainingGuesses - 1;
                incorrectGuesses.push(guess);
                console.log(remainingGuesses)
                console.log("Wrong Guesses: " + incorrectGuesses);
                document.querySelector("#game-prompts").innerHTML = "TURN " + turnCount + ": WRONG GUESS. TRY AGAIN";
                document.querySelector("#wrong-guesses").innerHTML = incorrectGuesses;
                document.querySelector("#guesses-left").innerHTML = remainingGuesses;
                winCondition();
            }
        }
    }
       
}

// This function randomly chooses a word for the game
function randomWord() {
    var random = wordBank[Math.floor(Math.random()*wordBank.length)];
    var index = wordBank.indexOf(random);
    if (gameArray.length === 1) {
        gameArray.splice(0,1);
        gameArray.push(random);
        wordBank.splice(index, 1);
        console.log(random)
    }

    else if (gameArray.length === 0) {
        gameArray.push(random);
        wordBank.splice(index, 1);

        console.log(random)
    }
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
    strungWord = splitCharWord.join("");
    console.log(strungWord);
}

function emptyBlanks() {
    blankSpaces = [];
    for (i=0; i<splitCharWord.length; i++) {
        blankSpaces[i] = "_";
    }

    console.log(blankSpaces)

    blanksTogether = blankSpaces.join(" ");
    document.querySelector("#word-blanks").innerHTML = blanksTogether;
}

function winCondition() {
    if (blankSpaces.includes("_") === false) {
        wins = wins + 1;
        document.querySelector("#win-counter").innerHTML = wins;
        console.log("Number of wins: " + wins)
        console.log ("Number of losses: " + losses)
        console.log("YOU WIN!")
        document.querySelector("#game-prompts").innerHTML = "YOU WIN! Press any key to begin a new game";

        if (wordBank.length > 0) {
            console.log("---Press any key to begin a new game---")
            document.onkeyup = beginGame;
        }

        else {
            console.log("GAME OVER. No more words remaining.")
            document.querySelector("#game-prompts").innerHTML = "GAME OVER! THANKS FOR PLAYING!";
        }
    }

    else if (blankSpaces.includes("_") === true && remainingGuesses === 0) {
        losses = losses + 1;
        document.querySelector("#loss-counter").innerHTML = losses; 
        console.log("Number of wins: " + wins)
        console.log ("Number of losses: " + losses)
        console.log("DEFEATED")
        console.log("You ran out of guesses.")
        document.querySelector("#game-prompts").innerHTML = "YOU LOSE! Press any key to begin a new game";


        if (wordBank.length > 0) {
            console.log("---Press any key to begin a new game---")
            document.onkeyup = beginGame;
        }

        else {
            console.log("GAME OVER. No more words remaining.")
        }
    }

    else if (blankSpaces.includes("_" === true) && remainingGuesses > 0)  {
        var blanksTogether = blankSpaces.join(" ");
        document.querySelector("#word-blanks").innerHTML = blanksTogether;
        guessRepeat();
    }
}

function sliceArray(wordBank) {
    for (i = 0; i < wordBank.length; i++) {
        var sepBank = wordBank.slice();
        splitString(sepBank[i])
    }
    console.log(wordBank.slice())
}

// MAIN PROCESS
document.onkeyup = beginGame;

