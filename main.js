var wordDisplay=require('./letter.js');
var inquirer=require('inquirer');
var allowedGuesses=10;
var guesses=0;
// Start game
console.log('Hello - this is a Space Hangman Game!');
console.log('Start by guessing  a letter:');
// Choose word in game.js
console.log('Here\'s the word: ');
	debugger;
startTheGame();
function startTheGame(){
	guesses=0;
	wordDisplay.wordselect();
	wordDisplay.selection.reset();
	console.log('main.js:');
	displayTheword(wordDisplay.selection.answer);
	getUserGuess();
}

function displayTheword(word){
	var showIt='';
	for (var i=0;i<word.length;i++){
		showIt+=word[i];
	}
	console.log(showIt);
}

function getUserGuess(){
	displayTheword(wordDisplay.selection.display);
	if (guesses<allowedGuesses){
		inquirer.prompt ([
			{
				type:"input",
				message:"Guess a letter:",
				name:"letter"
			}
		]).then(function(user){
			if (wordDisplay.selection.userCheck(user.letter.toLowerCase())){
				console.log('You Win!!');
				displayTheword(wordDisplay.selection.display);
				playAgain();
			}else {
				guesses++;
				getUserGuess();
			}
		});
	}else {
		console.log('You Lose. The word was: ');
		displayTheword(wordDisplay.selection.answer);
		playAgain();
	}
}
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

