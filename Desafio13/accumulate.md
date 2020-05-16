### Desafio 13

Retorne uma array de somas parciais.

Use `Array.prototype.reduce()`, `Array.prototype.slice(-1)` and the unary `+` operator to add each value to the unary array containing the previous sum.


```js
accumulate(1, 2, 3, 4); // [1, 3, 6, 10]
accumulate(30, 80, 999); // [30, 110, 1109]
```