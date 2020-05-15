import { assertEquals } from '../tests.js'

console.log('\n\n\nTESTES:');

const f100 = redundant("apple")
const f102 = redundant("pear")
const f103 = redundant("")

assertEquals(f100(), "apple")
assertEquals(f102(), "pear")
assertEquals(f103(), "")