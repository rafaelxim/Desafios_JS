// https://edabit.com/challenge/XnZAcvr4tCD9ppyrN

function boomIntensity(n) {
  let x = 'o';
  let len = 'b'+(x.repeat(n))+'m';
   if(n < 2){
     return 'boom';
   } else if(n % 5 === 0 && n % 2 === 0) {
    return len.toUpperCase()+'!'
  } else if(n % 5 === 0) {
    return len.toUpperCase();
  } else if(n % 2 === 0) {
    return len.charAt(0).toUpperCase()+len.substr(1)+'!';
  } else 
    return len.charAt(0).toUpperCase()+len.substr(1);
 }


const boomIntensity = n => {
	if (n < 2) return 'boom';
	const boom = 'B' + 'o'.repeat(n) + 'm' + (!(n % 2) ? '!' : '');
	return !(n % 5) ? boom.toUpperCase() : boom;
};

console.log(boomIntensity(4)) 
// ➞ "Boooom!"
// There are 4 "o"s and 4 is divisible by 2 (exclamation mark included)

console.log(boomIntensity(1) )
// ➞ "boom"
// 1 is lower than 2, so we return "boom"

console.log(boomIntensity(5) )
// ➞ "BOOOOOM"
// There are 5 "o"s and 5 is divisible by 5 (all caps)

console.log(boomIntensity(10) )
// ➞ "BOOOOOOOOOOM!"
// There are 10 "o"s and 10 is divisibl