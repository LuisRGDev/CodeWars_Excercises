function highAndLow(numbers){
  // ...
  const input = numbers.split(' ').map(Number);
  const high = Math.max(...input);
  const low = Math.min(...input);
  let output = "";

  if (input.length === 0){
    return; 
  }else{
    output = `${high} ${low}`;
    console.log("Output =>", output);
    return output;
  }
}

console.log(highAndLow("1 2 -3 4 5"));