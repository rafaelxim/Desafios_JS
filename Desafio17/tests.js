import { assertEquals } from '../tests.js'

console.log('\n\n\nTESTES:');


assertEquals(formatDate(1530580501020), 'July 2, 2018') // July 2, 2018
assertEquals(formatDate(1530680400000), 'July 4, 2018') // July 4, 2018
