module.exports.isPrime = isPrime;

function isPrime(n){
  var divisor = 2;
  
  while(n > divisor){
    if( n%divisor === 0 ){ return false; }
    divisor ++;
  }
  return true;
}