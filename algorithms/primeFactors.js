module.exports.primeFactors = primeFactors;

function primeFactors(n){
  var factors=[],
  divisor = 2;
  
  while(n > divisor){
    if(n % divisor == 0){
      factors.push(divisor);
    } 
    divisor++;
  }
  
  return factors;
}