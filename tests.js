
export const assertEquals = (y, x) => {
  
    if(y === x){
      console.log('%c Teste Passou! ', 'background: #06623b; color: #fff');
      console.log(y);
    }
    else{
      console.log('%c Teste não passou ', 'background: #c70039; color: #fff');
      console.log(`Resultado obtido: ${y}` )
      console.log(`Resultado esperado: ${x}` )
    }
  }


  export const assertSimilar = (y, x) => {
  
    if(_.isEqual (y, x)){
      console.log('%c Teste Passou! ', 'background: #06623b; color: #fff');
      console.log(y);
    }
    else{
      console.log('%c Teste não passou ', 'background: #c70039; color: #fff');
      console.log(`Resultado obtido: ${y}` )
      console.log(`Resultado esperado: ${x}` )
    }
  }