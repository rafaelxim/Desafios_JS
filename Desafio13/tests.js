import { assertSimilar } from '../tests.js'

console.log('\n\n\n\n\n\n\n\n\nTESTES:');

assertSimilar(accumulate(1, 3, 1, 2), [1, 4, 5, 7]);  
assertSimilar(accumulate(1, 5, 20, 40), [1, 6, 26, 66]);  
assertSimilar(accumulate(1, 5, 20, 40, 1, 5), [1, 6, 26, 66, 67, 72]);  
assertSimilar(accumulate(1, 2, 352), [1, 3, 355]);  
assertSimilar(accumulate(1, 50, 0), [1, 51, 51]) ;  
assertSimilar(accumulate(30, 80, 999), [30, 110, 1109]);  