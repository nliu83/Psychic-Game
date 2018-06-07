

    var choices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    //Wins and losses start at 0 when game starts al
    var wins = 0;
    var losses = 0;
    var guessesremaining = 9;

    //Empty array to store guesses made by user
    var guessesmade = [];
    var userGuess = null;
    var computerinput = choices[Math.floor(Math.random() * choices.length)];
        console.log("Computer choice: " + computerinput);

    document.onkeyup = function(event) {
        

        var userGuess = event.key;
    
        
            //making sure that userGuess is not repeated and user is only choosing from choices choices
            if (guessesmade.indexOf(userGuess) < 0 && choices.indexOf(userGuess) >= 0) {
            //adding userGuess to guessesmade array    
            guessesmade[guessesmade.length] = userGuess;
            guessesremaining--;
            }
             //if user doesnt select one of the letters, send alert message
            else if (choices.indexOf(userGuess) >= 0) {
            alert("Looks like you have already selected this character. Please choose another character.");
            }
            else if (guessesmade.indexOf(userGuess)) {
            alert("Please selected a letter from A to Z")
            }
            //if computer's letter is the same with the user's guess, then increase wins, and reset guesses guesses remainng, new computer letter, and guessesmade
            if (computerinput == userGuess) {
                wins++;
                console.log("You won!");
                guessesremaining = 9;
                guessesmade = [];
                computerinput = choices[Math.floor(Math.random()* choices.length)];
        console.log("Computer choice: " + computerinput);
            }
            //if computer's letter is not the same with user's guess, then increase losses and reset guesses guesses remainng, new computer letter, and guessesmade
            if (guessesremaining == 0) {
                losses++;
                console.log("You lost :(");
                guessesremaining = 9;
                guessesmade = [];
                computerinput = choices[Math.floor(Math.random()* choices.length)];
        console.log("Computer choice: " + computerinput);
            }

            //print message using innerHTML
        
        var html = 
            
            "<p>Wins: " + wins + "</p>" +
            "<p>Losses: " + losses + "</p>" +
            "<p>Guesses Left: " + guessesremaining + "</p>" +
            "<p>Your Guesses so far: " + guessesmade + "</p>";

        document.querySelector("#psychicgame").innerHTML = html;
            
        
        }
       
        
    