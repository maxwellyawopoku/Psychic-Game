// Creates an array that lists out all of the options (Letters from a to z).
    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
                           "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    // Creating variables to hold the number of wins, losses. They start at 0.
    var wins = 0;
    var losses = 0;
    var totalGuesses;
    var guessLeft;
    var userGuess;
    var computerGuess;
    var allUserGuess = [];
    
   // new game reset game
   function newGame() {
    guessLeft = 9;
    allUserGuess = [];
    // / Randomly chooses a choice from the options array. This is the Computer's guess.
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    var html = 
        "<h1>The Psychic Game</h1>" +
        "<p>Guess what letter I'm thinking of </p>" +
        "<p>wins: " + wins + "</p>" +
        "<p>losses: " + losses + "</p>" +
        "<p>Guesses left: "  + guessLeft + "</p>" +
        "<p>Your Guesses so far: " + allUserGuess.join(", ") + "</p>"; 
          
        // // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game").innerHTML = html;

   }

  newGame();


    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

      // Determines which key was pressed.
      userGuess = event.key;  

      // This logic determines the outcome of the game (win/loss), and increments the appropriate number

        if  (userGuess === computerGuess) {
          wins++;
          newGame();
          
        } else if (userGuess !== computerGuess) {
          allUserGuess.push(userGuess);
          guessLeft--;
        }

        if (guessLeft === 0) {
          losses++;
          newGame();
        }
      

 

// -------------------------------------------------

          




        // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
        var html =

          "<h1>The Psychic Game</h1>" +
          "<p>Guess what letter I'm thinking of </p>" +
          
          "<p>wins: " + wins + "</p>" +
          "<p>losses: " + losses + "</p>" +

          "<p>Guesses left: "  + guessLeft + "</p>" +

          "<p>Your Guesses so far: " + allUserGuess.join(", ") + "</p>";

         
          

        // // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game").innerHTML = html;
               
      
};

