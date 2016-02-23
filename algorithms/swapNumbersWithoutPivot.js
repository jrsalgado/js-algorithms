module.exports.swap = swap;

function swap(a,b){
  b = a * b;
  a = b / a;
  b = b / a; 
  return {a:a,b:b};
}