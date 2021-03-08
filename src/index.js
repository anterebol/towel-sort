
module.exports =  function towelSort (arg) {
 if (arg == undefined) {
   return [];
 }
  if (arg.length < 1) {
    return [];
      }
  let cheng = [];
  let helper;
  let d = '';
  for (let i = 0; i < arg.length; i++) {
    if ((i + 1)%2 === 0) {
      helper = arg[i];
      for ( let k = arg[i].length - 1; k >=0; k--) {
        cheng.push(helper[k]);
      }
      arg[i] = cheng;
      cheng = [];
    }
  }
  for (let i = 0; i < arg.length; i++){
    helper = arg[i];
    for (let k = 0; k < arg[i].length; k++){
    cheng.push(helper[k]);
  }}
    return cheng;
  }



 
  
  