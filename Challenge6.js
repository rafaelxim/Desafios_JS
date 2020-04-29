// https://edabit.com/challenge/ZMk2HeNSWX7vRewcD


// MINE
function getEquivalent(note) {
	let fNote = '';
	if(note.indexOf('#') === 1){
		fNote = String.fromCharCode(note.charCodeAt(0) + 1) + 'b';
		if(note === 'G#') fNote = 'Ab';
	}else{
		fNote = String.fromCharCode(note.charCodeAt(0) - 1) + '#';
		if(note === 'Ab') fNote = 'G#';
	}
	return fNote;
}

// BEST
function getEquivalent(note) {
	const narr=["C","D","E","F","G","A","B"];
	const ind =narr.indexOf(note[0]);
	if(note[1]=== "#") return narr[ind+1].concat('b');
	if(note[1]=== "b") return narr[ind-1].concat('#')
}

getEquivalent("D#");
getEquivalent("Gb");
getEquivalent("Bb");
getEquivalent("G#");
getEquivalent("Ab");