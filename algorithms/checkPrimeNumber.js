module.exports.isPrime = isPrime;
module.exports.isPrime2 = isPrime2;

function isPrime(n){
  var divisor = 2;
  
  while(n > divisor){
    if( n%divisor === 0 ){ return false; }
    divisor ++;
  }
  return true;
}

// A number will be never divisible by a number up to his root square
// and any number divisible on a even number will be divisible by 2
function isPrime2(n){
  var top = Math.sqrt(n),
  divisor = 2;
  
  while(top > divisor){
    if( n%divisor === 0 ){ return false; }
    divisor = (divisor === 2)? 3 : divisor += 2;
  }
  
  return true;
}