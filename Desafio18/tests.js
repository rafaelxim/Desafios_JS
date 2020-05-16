import { assertSimilar } from '../tests.js'

console.log('\n\n\nTESTES:');


assertSimilar(getMonths(), ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]);
assertSimilar(getMonths(null, true), ["jan.", "fev.", "mar.", "abr.", "mai.", "jun.", "jul.", "ago.", "set.", "out.", "nov.", "dez."]);
assertSimilar(getMonths(1), 'janeiro');
assertSimilar(getMonths(3, true), 'mar.');