// https://vanillajstoolkit.com/helpers/dedupe/

const dedupe = function (arr) {
	return arr.filter(function (item, index) {
		return arr.indexOf(item) === index;
	});
};


console.log(dedupe(['bola', 'celular', 'fone', 'bola'])); // ["bola", "celular", "fone"]
console.log(dedupe(['jogador', 'camisa 10', 'flamengo', 'camisa 10'])); // ["jogador", "camisa 10", "flamengo"]
console.log(dedupe(['tia', 'avó', 'avó', 'tio'])); // ["tia", "avó", "tio"]

