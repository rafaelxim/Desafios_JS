// https://edabit.com/challenge/tYHkTdFrEmWfxpPKF


// Minha
function matchHouses(step) {

  let fosforos = 0;
  for(let i = 1; i <= step; i++ ){
    fosforos += 5;
    // fosforos = fosforos + 5 ;
  }

  if(step > 0){
    fosforos += 1;
  }

  return fosforos;  	
}

//Best
return step === 0 ? 0 : 5 * step + 1;

matchHouses(1)
matchHouses(4) 
matchHouses(87) 