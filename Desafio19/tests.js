import { assertEquals } from '../tests.js'

console.log('\n\n\nTESTES:');


assertEquals(isTenBased(10), 1);
assertEquals(isTenBased(200), 0);
assertEquals(isTenBased(1200), 0);