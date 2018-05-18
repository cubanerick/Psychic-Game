
var compChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];


document.onkeyup = function(event) {
    
    var userGuess = event.key;

    var compGuess = compChoices[Math.floor(Math.random()*compChoices.length)];

    if (userGuess === compGuess) {
        wins++;
        document.querySelector("#winsd").innerHTML = wins;
        guessesSoFar = [];
        guessesLeft = 9;
    }
    if (userGuess !== compGuess){
        guessesLeft--;
        document.querySelector("#guessesLeftd").innerHTML = guessesLeft;
        guessesSoFar.push(userGuess);
        guessesSoFar.toString();
        document.querySelector("#guessesSoFard").innerHTML =
        "<strong>" + guessesSoFar + "</strong>";
    }
    if(guessesLeft === 0) {
        losses++;
        guessesSoFar = [];
        guessesLeft = 9;
        document.querySelector("#lossesd").innerHTML = losses;
    }
}



