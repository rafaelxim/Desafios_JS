## Desafio 2

Crie uma function que recebe uma **array de instancias** da classe IceCream e retorne o valor que representa o quão doce é o sorvete.

Esse valor é calculado a partir do **sabor** e do **número de bolas**. Cada bola tem o valor 1, os valores dos sabores são os seguintes:

| Sabor     | Valor |
|-----------|-------|
| Creme     | 0     |
| Baunilha  | 5     |
| Chocolate | 5     |
| Morango   | 10    | 
| Nutella   | 10    |

As propriedades da instância dos sorvetes serão **sabor** e **numBolas**.


##### Exemplos
```js
 ice1 = IceCream("Chocolate", 13)         
// ➞ 18
 ice2 = IceCream("Baunilha", 0)            
// ➞  5
 ice3 = IceCream("Morango", 7)         
// ➞  17
 ice4 = IceCream("Creme", 18)              
// ➞  18
 ice5 = IceCream("Chocolate", 3)       
// ➞  8


sweetestIcecream([ice1, ice2, ice3, ice4, ice5]) 
// ➞ 18
sweetestIcecream([ice3, ice1]) 
// ➞ 18
sweetestIcecream([ice3, ice5]) 
// ➞ 17
```