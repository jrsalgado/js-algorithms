module.exports.removeDuplicated = removeDuplicated;

function removeDuplicated(list){
  var nonRepeated = [],
  exists = {},
  i=0,
  length = list.length,
  num;
  
  for( ;i < length; i++ ){
    num = list[i];
    if(!(num in exists)){
      nonRepeated.push(num);
      exists[num] = true;
    }
  }
  return nonRepeated;
}