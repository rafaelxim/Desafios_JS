## Desafio 4

Crie uma function que receba uma string, verifique se é um endereço de email válido e retorne true ou false, dependendo do resultado da validação.

* A string deve conter um @
* A string deve conter um .
* O @ deve ter pelo menos um caractere na frente dele.
* O . e o @ devem estar nos lugares certos.

##### Exemplos
```js
validateEmail("@gmail.com") 
// ➞ false

validateEmail("hello.gmail@com") 
// ➞ false

validateEmail("gmail") 
// ➞ false

validateEmail("hello@gmail") 
// ➞ false

validateEmail("hello@edabit.com") 
// ➞ true
```