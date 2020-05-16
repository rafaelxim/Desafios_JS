import { assertSimilar } from '../tests.js'

console.log('\n\n\n\n\n\n\n\n\nTESTES:');

var arr1 = [1, 2, 3, 4, 5];
var arr2 = [1, 2, 3, 4, 5];
var arr3 = [5, 4, 3, 2, 1];
var arr4 = ['1', '2', '3', '4', '5'];

assertSimilar(arraysMatch(arr1, arr2), true); // true
assertSimilar(arraysMatch(arr1, arr3), false); // false
assertSimilar(arraysMatch(arr1, arr4), false); // false
