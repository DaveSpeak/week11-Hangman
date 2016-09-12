var words = ['SpaceShuttle','Jupiter','Saturn','Mars','Skylab','Apollo','Armstrong','Hubble','quasar','Venus','galaxy'];

function selectAword(){
	exports.selectedWord = words[Math.floor(Math.random()*words.length)].toLowerCase();
}

exports.select=selectAword;


