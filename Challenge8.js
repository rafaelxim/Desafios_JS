// https://edabit.com/challenge/4aaBNPnFMc3bzR7JR

// minha
function objectToArray(obj) {
  let arr = [];
	for(let o in obj){
    arr.push([o, obj[o]])
  }
  return arr ;
}


// BEST
function objectToArray(obj) {
	return Object.keys(obj).map(key => [key, obj[key]])
}



objectToArray({
  D: 1,
  B: 2,
  C: 3
}) 

objectToArray({
  likes: 2,
  dislikes: 3,
  followers: 10
}) 