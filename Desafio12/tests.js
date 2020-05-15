import { assertEquals } from '../tests.js'

console.log('\n\n\n\n\n\n\n\n\nTESTES:');

assertEquals(binary(100), "1100100")
assertEquals(binary(1), "1")
assertEquals(binary(0), "0")
assertEquals(binary(69), "1000101")
assertEquals(binary(1023), "1111111111")
assertEquals(binary(511), "111111111")
assertEquals(binary(666), "1010011010")
assertEquals(binary(123), "1111011")