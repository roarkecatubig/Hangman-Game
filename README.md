File should render a Star Wars themed hangman game. Although the game itself does not visually create the "hangman", it does offer a remaining guesses count. 

The game should execute as follows:
  1. Page is loaded and you are prompted to press any key on the keyboard to begin the game. 
  2. Once a key is pressed, the "---Press any KEY to begin game---" prompt will be replaced by an appropriate number of blanks equal to        the number of characters in a randomly selected Star Wars word. User will be prompted in the header that a new game has started.
  3. From this point forward, the user must continue to press keys on the keyboard in hopes of completing the once mysterious, blank word.
      -At each key press, the turn count that's prompted in the header will continually give feedback as to whether the user has inputted        a correct letter, an incorrect letter, or if they already inputted that letter previously.
      -Incorrect letter guesses will reduce the remaining guesses count by 1 for each incorrect letter. Incorrect letters will be                displayed in the appropriate section and will consistently be updated as the game progressess.
  4. The status of the game is constantly being checked for any one of the following scenarios:
      -All the blanks have been replaced by the appropriate letters and the player has won the game. The # of wins count is incremented by        one and the user is prompted to hit any key to begin a new game with a different word.
      -The # of remaining guesses has been reduced to 0 and word has not been solved. In which case, the player has lost the game and the        # of losses is incremented by one. The user is prompted to hit any key to begin a new game with a different word. 
      -The player has cycled through all of words in the stored word bank and so the game ends. The user must manually refresh the page in        order to play the game again.
