// npm package to get user input
var inquirer=require('inquirer');
// game.js has the function which selects a random word
var wordIneed=require('./game.js');
// word.js has the prototypes which check user guesses against the word
// and determine if the user has guessed all the letters
var something=require('./word.js');
// allowable number of guesses and initialize # of user guesses 
var allowedGuesses=10;
var guesses=0;
// Start game:
console.log('Hello - this is a Space Hangman Game!');
console.log('Start by guessing  a letter:');
console.log('Here\'s the word: ');
startTheGame();

// Start or restart the game
function startTheGame(){
	guesses=0;
	// get random word from game.js
	wordIneed.select();
	// generate new instance of the 'Word' constructor from 'letter.js'
	// letter.js is referenced thru word.js
	selectedWord = new something(selectedWord);
	// get user guesses
	getUserGuess();
}

// function which is called recursively until user guesses all the letters or
// runs out of guesses
function getUserGuess(){
	// render word thru method 'wordRender' on 'Word' constructor located in letter.js
	selectedWord.wordRender(false);
	// Get user input if allowable guesses not exceeded
	if (guesses<allowedGuesses){
		inquirer.prompt ([
			{
				type:"input",
				message:"Guess a letter:",
				name:"letter"
			}
		]).then(function(user){
			// Check if user has guessed correctly by calling 'guessletter' method from word.js
			selectedWord.guessletter(user.letter.toLowerCase().charAt(0));
			// check if user has guessed all the letters
			if (selectedWord.didWeFindTheWord()){
				// user has won - generate message, render the word and call the play again function
				console.log('You Win!!');
				selectedWord.wordRender(false);
				playAgain();
			}else {
				//increment user guesses and call function recursively
				guesses++;
				getUserGuess();
			}
		});
	}else {
		// user has lost - generate message, render the word and call the play again function
		console.log('You Lose. The word was: ');
		selectedWord.wordRender(true);
		playAgain();
	}
}
// function to ask if the player wants another round
function playAgain(){
	inquirer.prompt([
		{
			type:"confirm",
			message:"Do you want to play again?",
			name:"again"
		}
	]).then(function(play){
		if (play.again){
			startTheGame();
		}else {process.exit();}
	});
}

