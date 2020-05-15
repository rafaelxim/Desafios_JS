import { assertEquals } from '../tests.js'

console.log('\n\n\n\n\n\n\n\n\nTESTES:');


assertEquals(validateEmail('@edabit.com'), false)
assertEquals(validateEmail('@edabit'), false)
assertEquals(validateEmail('matt@edabit.com'), true)
assertEquals(validateEmail(''), false, "Don't forget about empty strings!")
assertEquals(validateEmail('hello.gmail@com'), false)
assertEquals(validateEmail('bill.gates@microsoft.com'), true)
assertEquals(validateEmail('hello@email'), false)
assertEquals(validateEmail('%^%$#%^%'), false)
assertEquals(validateEmail('www.email.com'), false)
assertEquals(validateEmail('email'), false)