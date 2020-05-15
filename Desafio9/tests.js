import { assertEquals } from '../tests.js'

console.log('\n\n\n\n\n\n\n\n\nTESTES:');

assertEquals(matchHouses(1), 6)
assertEquals(matchHouses(0), 0)
assertEquals(matchHouses(17), 86)
assertEquals(matchHouses(36), 181)
assertEquals(matchHouses(15), 76)
assertEquals(matchHouses(99), 496)
assertEquals(matchHouses(3), 16)
assertEquals(matchHouses(87), 436)