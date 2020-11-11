let arr = [1,2,3,4,56,7,42,46,766,88856,11,13,17];
let res1 = [];
let res2 = [];
function test_prime(n)
{
  if (n===1){
    return false;
  }
  else if(n === 2){
    return true;
  }
  else{
    for(var x = 2; x < n; x++){
      if(n % x === 0){
        return false;
      }
    }
    return true;  
  }
}

//implementing anonymous function
let listPrime = function(){
    arr.forEach(e=>{
        if(test_prime(e)){
            res1.push(e);
        }
    })
    console.log(res1.join(" "));
}

listPrime(); // anonymous function call

let IIFEPrime = (function(){
    arr.forEach(e=>{
          if(test_prime(e)){
              res2.push(e);
          }
      })
      return res2.join(" ");
  }) ();  
  
  console.log(IIFEPrime)  //IIFE function call