### Desafio 16

Criar uma query string a partir de um objeto.

```js

var petfinderData = {
  key: '12345',
  shelterID: 'abc00',
  count: 20,
  animal: 'dogs'
};

buildQuery(petfinderData); // key=12345&shelterID=abc00&count=20&animal=dogs
```