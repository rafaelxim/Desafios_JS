### Desafio 20

Retornar um objeto, a partir das propriedades selecionadas de outro objeto.

```js

var lunch = {
	sandwich: 'turkey',
	drink: 'water',
	chips: 'salt and vinegar',
	desert: true
}; 

pick(lunch, ['sandwich', 'drink']) // {sandwich: "turkey", drink: "water"}
pick(lunch, ['desert', 'sandwich']) // {desert: true, sandwich: "turkey"}
```