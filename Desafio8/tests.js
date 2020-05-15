import { assertSimilar } from '../tests.js'

console.log('\n\n\n\n\n\n\n\n\nTESTES:');

assertSimilar(objectToArray({
	D: 1, 
  B: 2, 
  C: 3
}), [["D", 1], ["B", 2], ["C", 3]])

assertSimilar(objectToArray({
	likes: 2, 
  dislikes: 3, 
  followers: 10
}), [["likes", 2], ["dislikes", 3], ["followers", 10]])