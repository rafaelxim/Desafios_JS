// https://edabit.com/challenge/3kcrnpHk7krNZdnKK

function binary(decimal) {
	let result = "";
	if (decimal == 0) {
		result = "0";
	}
	while (decimal > 0) {
    result += decimal % 2;
    decimal = Math.floor(decimal/2);
  };
	return result.split("").reverse().join("");
}


function binary(decimal) {
	return decimal.toString(2);
}

binary(1) 
// ➞ "1"
// 1*1 = 1

binary(5) 
// ➞ "101"
// 1*1 + 1*4 = 5

binary(10) 
// ➞ "1010"
// 1*2 + 1*8 = 10