// https://edabit.com/challenge/ebcd4Xu8TLizaj6dm

// MINHA 
function arrayOfMultiples (num, length) {
  let arr = [];  
  let original = num;

  while (length > 0) {    
    arr.push(num);
    num += original;
    length-=1; 
  }
  return arr;
}

// Best
const arrayOfMultiples = (num, length) => {
	return Array.from({length: length}, (_, i) => num * (i + 1));
}

arrayOfMultiples(7, 5);
arrayOfMultiples(12, 10);
arrayOfMultiples(17, 6);