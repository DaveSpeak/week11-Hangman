// random words array - new words can be added without affecting program function
var words = ['SpaceShuttle','Jupiter','Saturn','Mars','Skylab','Apollo','Armstrong','Hubble','quasar','Venus','galaxy'];
// randomly select a word
function selectAword(){
	return selectedWord = words[Math.floor(Math.random()*words.length)].toLowerCase();
}
// export function
exports.select=selectAword;


