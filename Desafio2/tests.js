console.log('\n\n\n\n\n\n\n\n\nTESTES:');

const assertEquals = (y, x) => {
  
  if(y === x){
    console.log('%c Teste Passou! ', 'background: #06623b; color: #fff');    
  }
  else{
    console.log('%c Teste não passou ', 'background: #c70039; color: #fff');
    console.log(`Esperado: ${x}`);
    console.log(`Retornado: ${y}`);
  }
}


class IceCream {
	constructor(sabor, numBolas) {
		this.sabor = sabor
		this.numBolas = numBolas
	}
}

ice1 = new IceCream("Nutella", 13)
ice2 = new IceCream("Baunilha", 0)
ice3 = new IceCream("Morango", 7)
ice4 = new IceCream("Creme", 18)
ice5 = new IceCream("Chocolate", 3)
ice6 = new IceCream("Nutella", 23)
ice7 = new IceCream("Morango", 0)
ice8 = new IceCream("Creme", 34)
ice9 = new IceCream("Creme", 81)
ice10 = new IceCream("Baunilha", 12)

assertEquals(sweetestIcecream([ice1, ice2, ice3, ice4, ice5]), 23)
assertEquals(sweetestIcecream([ice7, ice10, ice1, ice6, ice8, ice10, ice2, ice2]), 34)
assertEquals(sweetestIcecream([ice10, ice10, ice6, ice8, ice4]), 34)
assertEquals(sweetestIcecream([ice2, ice10, ice6, ice9, ice7]), 81)
assertEquals(sweetestIcecream([ice10, ice6, ice4, ice1, ice7, ice8, ice6]), 34)
assertEquals(sweetestIcecream([ice3, ice1]), 23)
assertEquals(sweetestIcecream([ice6, ice7, ice5, ice4, ice3]), 33)
assertEquals(sweetestIcecream([ice4, ice8, ice9]), 81)
assertEquals(sweetestIcecream([ice5, ice7]), 10)
assertEquals(sweetestIcecream([ice5, ice3, ice6, ice2, ice7, ice2, ice7, ice2]), 33)
assertEquals(sweetestIcecream([ice1, ice9, ice10, ice9, ice7, ice1, ice9]), 81)
assertEquals(sweetestIcecream([ice1, ice4]), 23)
assertEquals(sweetestIcecream([ice7, ice4]), 18)
assertEquals(sweetestIcecream([ice1, ice8, ice6, ice7, ice3, ice2, ice3, ice7]), 34)
assertEquals(sweetestIcecream([ice7, ice8, ice4, ice4, ice5, ice1]), 34)
assertEquals(sweetestIcecream([ice10, ice10, ice9, ice4, ice7, ice9]), 81)
assertEquals(sweetestIcecream([ice3, ice10, ice1]), 23)
assertEquals(sweetestIcecream([ice3, ice4, ice7, ice3, ice7, ice10, ice2]), 18)
assertEquals(sweetestIcecream([ice5, ice9, ice9, ice9, ice7, ice5, ice9, ice7]), 81)
assertEquals(sweetestIcecream([ice4, ice9, ice2]), 81)
assertEquals(sweetestIcecream([ice8, ice2, ice2, ice2, ice4, ice8]), 34)
assertEquals(sweetestIcecream([ice4, ice9, ice4, ice3, ice3, ice2, ice5, ice2]), 81)
assertEquals(sweetestIcecream([ice8, ice10, ice5]), 34)
assertEquals(sweetestIcecream([ice10, ice3, ice2, ice1, ice9]), 81)
assertEquals(sweetestIcecream([ice8, ice3, ice4, ice5]), 34)
assertEquals(sweetestIcecream([ice10, ice8, ice6, ice7, ice9, ice4]), 81)
assertEquals(sweetestIcecream([ice5, ice4, ice6, ice6, ice1]), 33)
assertEquals(sweetestIcecream([ice6, ice8, ice2, ice10, ice7, ice10]), 34)
assertEquals(sweetestIcecream([ice1, ice9, ice7, ice3]), 81)
assertEquals(sweetestIcecream([ice7, ice1, ice9, ice6, ice7, ice10, ice2, ice3]), 81)
assertEquals(sweetestIcecream([ice5, ice1, ice7, ice6, ice8, ice1, ice8]), 34)
assertEquals(sweetestIcecream([ice10, ice9, ice2, ice4, ice10]), 81)
assertEquals(sweetestIcecream([ice3, ice7, ice10]), 17)
assertEquals(sweetestIcecream([ice10, ice5, ice4]), 18)
assertEquals(sweetestIcecream([ice9, ice2, ice4, ice8, ice3, ice3]), 81)
assertEquals(sweetestIcecream([ice6, ice3, ice9, ice8, ice2, ice6]), 81)
assertEquals(sweetestIcecream([ice10, ice3]), 17)
assertEquals(sweetestIcecream([ice10, ice7, ice5, ice2, ice9]), 81)
assertEquals(sweetestIcecream([ice10, ice10, ice4, ice1, ice9]), 81)
assertEquals(sweetestIcecream([ice9, ice2, ice6, ice4, ice10, ice3]), 81)
assertEquals(sweetestIcecream([ice8, ice10, ice1, ice7, ice8, ice9, ice1]), 81)
assertEquals(sweetestIcecream([ice7, ice5, ice3, ice8, ice1, ice9]), 81)
assertEquals(sweetestIcecream([ice2, ice6, ice3]), 33)
assertEquals(sweetestIcecream([ice6, ice6]), 33)
assertEquals(sweetestIcecream([ice9, ice6, ice8, ice3, ice2, ice2]), 81)
assertEquals(sweetestIcecream([ice1, ice3, ice3, ice6]), 33)
assertEquals(sweetestIcecream([ice8, ice6]), 34)
assertEquals(sweetestIcecream([ice1, ice1]), 23)
assertEquals(sweetestIcecream([ice4, ice2, ice3, ice9, ice5, ice10, ice6]), 81)
assertEquals(sweetestIcecream([ice10, ice8, ice4, ice3, ice9, ice8, ice1, ice10]), 81)
assertEquals(sweetestIcecream([ice5, ice8, ice5]), 34)
