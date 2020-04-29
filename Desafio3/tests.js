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

assertEquals(getBudgets([{name: "John",  age: 21, budget: 23000}, {name: "Steve",  age: 32, budget: 40000}, {name: "Martin",  age: 16, budget: 2700}]), 65700)
assertEquals(getBudgets([{name: "John",  age: 21, budget: 29000}, {name: "Steve",  age: 32, budget: 32000}, {name: "Martin",  age: 16, budget: 1600}]), 62600)
assertEquals(getBudgets([{name: "John",  age: 21, budget: 19401}, {name: "Steve",  age: 32, budget: 12321}, {name: "Martin",  age: 16, budget: 1204}]), 32926)
assertEquals(getBudgets([{name: "John",  age: 21, budget: 10234}, {name: "Steve",  age: 32, budget: 21754}, {name: "Martin",  age: 16, budget: 4935}]), 36923)