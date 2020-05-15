import { assertEquals } from '../tests.js'

console.log('\n\n\n\n\n\n\n\n\nTESTES:');

assertEquals(boxSeq(5), 7)
assertEquals(boxSeq(0), 0)
assertEquals(boxSeq(6), 6)
assertEquals(boxSeq(99), 101)
assertEquals(boxSeq(2), 2)
assertEquals(boxSeq(1), 3)