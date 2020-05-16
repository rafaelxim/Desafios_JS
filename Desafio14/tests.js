import { assertSimilar } from '../tests.js'

console.log('\n\n\n\n\n\n\n\n\nTESTES:');

assertSimilar(dedupe(['bola', 'celular', 'fone', 'bola']), ["bola", "celular", "fone"]); 
assertSimilar(dedupe(['jogador', 'camisa 10', 'flamengo', 'camisa 10']), ["jogador", "camisa 10", "flamengo"]); 
assertSimilar(dedupe(['tia', 'avó', 'avó', 'tio']), ["tia", "avó", "tio"]);  