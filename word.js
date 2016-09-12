var userGuesses=[];
var correct=require('./letter.js');

function checkUserGuess(userGuess){
	userGuess=userGuess.charAt(0);
	userGuess=userGuess.replace(/[!@#$%^&*()+=\[\]\{\}\:\;\'\",.<>?/\\|`~]/g,'');
	for (var i=0;i<userGuesses.length;i++){
		if (userGuess===userGuesses[i]){return null;}
	}
	userGuesses.push(userGuess);
	for (var i=0;i<correct.selection.answer.length;i++){
		if (userGuess===correct.selection.answer[i]){
			correct.selection.changeLetter(userGuess,i);
		}
	}
	// Check to see if user has guessed all leters, if so, return true
	for (var i=0;i<correct.selection.answer.length;i++){
		if (correct.selection.display[i]==='-'){return false;}
	}
	return true;
}

function resetUserGuesses(){
	userGuesses=[];
}

exports.check=checkUserGuess;
exports.reset=resetUserGuesses;