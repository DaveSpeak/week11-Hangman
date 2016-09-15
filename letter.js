// constructor to create object with a letter and a boolean value
// to flag whether the letter has been guessed
function Letter(l){
	this.letter=l;
	this.guessed=false;
	return;
}
// constructor to combine the Letter objects into another object
// which contains the entire word and whether it has been guessed
function Word(word){
	this.letters=[];
	this.found=false;
	for (var i=0;i<word.length;i++){
		this.letters.push(new Letter(word[i]));
	}
	return;
}
// Prototype to render word. bool = 'true' will console.log the word with all letters displayed
// bool = 'false' will console log the word with only guessed letters displayed
Word.prototype.wordRender=function(bool){
	var display='';
	// loop thru all the letters in the Word object & determine
	// if any match the user guess
	for (var key in this.letters){
		if (this.letters[key].guessed || bool){
			display+=this.letters[key].letter;
		}else {
			display+='-';
		}
	}
	console.log(display);
	return;
}
//export the constructor
module.exports=Word;


