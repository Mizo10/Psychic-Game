var computerOption = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var win = 0;
var losses = 0;
var guesses = 9;
var userLetters = [];
document.onkeyup = function (event) {
    var userGuess = event.key;
    userLetters.push(userGuess);
    
    var computerGuess = computerOption[Math.floor(Math.random() * computerOption.length)];
    var guessesRemaining = guesses - 1;
    document.getElementById("guessesLeft").innerHTML = ("Guesses Left: " + guessesRemaining);
    document.getElementById("userGuesses").innerHTML = ("Your Guesses so far: " + userLetters);



    if (userGuess === computerGuess) {
        win++;
        guesses = 9;
        userLetters = [];
        document.getElementById("wins").innerHTML = ("Wins: " + (win));
        document.getElementById("guessesLeft").innerHTML = ("Guesses Left: " + guesses);
        document.getElementById("userGuesses").innerHTML = ("Your Guesses so far: ");
    } 
    else {
        guesses--;
    }

    if (guesses === 0){
        losses++;
        guesses = 9;
        userLetters = [];
        document.getElementById("guessesLeft").innerHTML = ("Guesses Left: " + guesses);
        document.getElementById("losses").innerHTML = ("losses: " + (losses));
        document.getElementById("userGuesses").innerHTML = ("Your Guesses so far: ");   
    }


    console.log(userGuess);
    console.log(computerGuess);
}



