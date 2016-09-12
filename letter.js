var wordIneed=require('./game.js');
var functionsIneed=require('./word.js');
var selectedWord=[];

function WordtoDisplay(word){
	var holder='';
	for (var i=0;i<word.length;i++){
		holder+='-';
	}
	this.display=holder.split('');
	this.answer=word.split('');
	this.userGuesses=[];
}

WordtoDisplay.prototype.changeLetter=function(letter,position){
	this.display[position]=letter;
	return;
}

WordtoDisplay.prototype.userCheck=function(user){return(functionsIneed.check(user));}
WordtoDisplay.prototype.reset=function(){functionsIneed.reset();}

function selectAword(){
	wordIneed.select();
	selectedWord = new WordtoDisplay(wordIneed.selectedWord);
	exports.selection=selectedWord;
}
exports.wordselect=selectAword;
