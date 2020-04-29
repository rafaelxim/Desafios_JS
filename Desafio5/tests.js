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
assertEquals(boxSeq(5), 7)
assertEquals(boxSeq(0), 0)
assertEquals(boxSeq(6), 6)
assertEquals(boxSeq(99), 101)
assertEquals(boxSeq(2), 2)
assertEquals(boxSeq(1), 3)