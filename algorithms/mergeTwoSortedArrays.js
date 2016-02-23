module.exports.mergeArrays = mergeArrays;

function mergeArrays(a , b){
  var merged = [],
  aEl = a[0],
  bEl = b[0],
  aI = 1,
  bI = 1;
  
  while(aEl || bEl){
    
    if( (aEl && !bEl)  || aEl < bEl){
      merged.push(aEl);
      aEl = a[aI++];
    }else{
      merged.push(bEl);
      bEl = b[bI++];
    }
  }
  
  return merged;
}