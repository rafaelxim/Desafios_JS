console.log('\n\n\n\n\n\n\n\n\nTESTES:');

const assertEquals = (y, x) => {
  
  if(y === x){
    console.log('%c Teste Passou! ', 'background: #06623b; color: #fff');
  }
  else{
    console.log('%c Teste não passou ', 'background: #c70039; color: #fff');
  }
}

const f100 = redundant("apple")
const f102 = redundant("pear")
const f103 = redundant("")

assertEquals(f100(), "apple")
assertEquals(f102(), "pear")
assertEquals(f103(), "")