import { assertSimilar } from '../tests.js'

console.log('\n\n\nTESTES:');

var lunch = {
	sandwich: 'turkey',
	drink: 'water',
	chips: 'salt and vinegar',
	desert: true
}; 

assertSimilar(pick(lunch, ['sandwich', 'drink']), {sandwich: "turkey", drink: "water"});
assertSimilar(pick(lunch, ['desert', 'sandwich']), {desert: true, sandwich: "turkey"}); 