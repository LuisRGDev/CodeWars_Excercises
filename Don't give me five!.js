function dontGiveMeFive(start, end)
{

    if(start > end){
        console.log("El numero inicial debe ser mayor que el numero final");
        return [];
    }
  const arr = [];
  let excluir = "5";
  
  
  for(let i=start; i<=end; i++){

        if(!i.toString().includes(excluir)){
            arr.push(i);
        }
    
  }

  return arr;

   
}
let resultado = dontGiveMeFive(9,6);
console.log(resultado, "-> Result", resultado.length);