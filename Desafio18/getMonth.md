### Desafio 18

Retornar uma lista formatada de meses.

**Dica:** utilize `toLocaleString()`.
```js

getMonths() // ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]
getMonths(null, true) // ["jan.", "fev.", "mar.", "abr.", "mai.", "jun.", "jul.", "ago.", "set.", "out.", "nov.", "dez."]
getMonths(1) // "janeiro"
getMonths(3, true) // "mar."
```