var countSheep = function (num){
  //your code here
  let result = "";
  let word = "sheep";
  
  
  for(i = 1; i <= num; i++){
    //let word = (i === 1) ? "sheep" : "sheeps";
    
    result += `${i} ${word}...`;
  }
  return result;
};
console.log(countSheep(3));
