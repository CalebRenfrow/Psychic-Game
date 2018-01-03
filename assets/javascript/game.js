
var wins = 0;
var winsE = document.getElementById("wins");

var losses = 0;
var lossesE = document.getElementById("losses");

var guessesLeft = 9;
var guessesLeftE = document.getElementById("guessesLeft");


guessesLeftE.textContent = guessesLeft;
var guessed = [];
var guessedE = document.getElementById("guessed");

var compChoice = '';

function newLetterToGuess()
{
    var compSelection = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
        compChoice = compSelection[Math.floor((Math.random() * 25) + 0)];
        console.log(compChoice);
}
newLetterToGuess();



document.onkeyup = function(event) {

var userChoice = event.key;

if (userChoice != compChoice)
{
    if (guessed.includes(userChoice))
        {
            alert("You already guessed that letter");
        }

    else
        {

            guessed += " " + userChoice;
            --guessesLeft;
            guessesLeftE.textContent = guessesLeft;
            
            if(guessesLeft == 8)                
            guessedE.textContent = userChoice;                
            else                               
            guessedE.textContent += ", " + userChoice;

            
            if(guessesLeft == 0)
            {
                lossesE.textContent = ++losses;
                guessesLeft = 9;
                guessed = "";                                
                guessedE.textContent = guessed;
                newLetterToGuess();
                

                
            }
        }

}
else{
    winsE.textContent = ++wins;
    guessesLeft = 9;
    newLetterToGuess();
    guessed = "";
    guessedE.textContent = guessed;
    guessesLeftE.textContent = guessesLeft;
    

}


}


