// https://edabit.com/challenge/Q4mYkd8nc8zdFBDE8

// Minha
function boxSeq(step) {
	let result = 0;
	for(let i = 1; i <= step; i++){
		if(i % 2 === 1 )  {
		result += 3;
		}else{
			result-= 1;
		}
	}
	return result;
}

// Best
// const boxSeq = step => (step % 2 === 0 ? step : step + 2);

