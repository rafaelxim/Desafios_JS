//https://edabit.com/challenge/8rC8cbEonMKbHeLTx

function validateEmail(str) {
  var at = str.indexOf("@");
  var dot = str.indexOf(".");
  
  
  if( at === -1 || dot === -1 || at === 0)
    return false;
  var lastdot = str.split("@").pop().indexOf(".");
  if (lastdot === -1 || lastdot === 0)
    return false;
  else 
    return true;
}
