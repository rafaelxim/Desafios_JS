// function sweetestIcecream(arr) {
// 	const sabores = {
//     Creme: 0 ,
//     Baunilha: 5,
//     Chocolate: 5,
//     Morango: 10,
//     Nutella: 10
//   } 
//   const totals = arr.map(iceCream => {
//         return iceCream.numBolas + sabores[iceCream.sabor];
//   });

//   return Math.max(...totals);
// }

const sweetestIcecream = arr => Math.max(...arr.map(iceCream => 
    ({me:0, ha:5, te:5, go:10, la:10}[iceCream.sabor.slice(-2)] + iceCream.numBolas)
)) 
  
