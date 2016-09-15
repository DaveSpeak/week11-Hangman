// include 'letter.js' which contains the Word constructor
var Word=require("./letter.js");
// prototype to compare user guess with letters in object
Word.prototype.guessletter=function(l){
	// loop thru object & if user has guessed a letter update
	// the Letters.guessed value to true so letter will be displayed
	for (var key in this.letters){
		if (l===this.letters[key].letter){
			this.letters[key].guessed=true;
		}
	}
	return;
}
// prototype to check if all letters have been guessed
Word.prototype.didWeFindTheWord=function(){
	// loop thru object & if any letters haven't been guessed return 'false'
	for (var key in this.letters){
		if (this.letters[key].guessed==false){return false;}
	}
	// if this code gets run there are no 'false' values -user has guessed 
	// all the letters. Update the Word object.found key with true (although
	// I don't use this) & return 'true'
	this.letters[key].found=true;
	return true;
}
// Export the construtctors
module.exports=Word;
