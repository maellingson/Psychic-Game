var availLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

//Selects Computer's Random Ltter
var randomavailLetter = availLetter[Math.floor(Math.random()*availLetter.length)];
console.log(randomavailLetter)




//variables for tracking
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = 0;

//Records Key Press
var keysPressed = "";
document.onkeyup = function(event) {
document.write(event.key);

}
/////////////////////////////////////////////////////
//Compare Key Press to Computer's Random Number


//Actions Based on that Comparison
while (keysPressed === !randomavailLetter){
    guessesLeft([i--] - guessesLeft);
    document.write(guessesLeft);
}

if (keysPressed === randomavailLetter){
    wins([i++] = wins);
    document.write(wins);
}

  
//getElementByIDs
var keysPressed = getElementByID(keysPressed);
var wins = getElementByID(wins);
var guessesLeft = getElementByID (guessesLeft);

