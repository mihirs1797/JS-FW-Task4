let arr = [1,2,3,4,5,6,7,8,9,10];
let sum = 0;

//implementing anonymous function

let sumOfNumbers = function(){
    arr.forEach(e=>sum+=e);
    console.log(sum);
}
sumOfNumbers(); //anonymous function call

//implementing IIFE function
let IIFEPrime = (function(){
  arr.forEach(e=>{
        if(test_prime(e)){
            res2.push(e);
        }
    })
    return res2.join(" ");
}) ();  

console.log(IIFEPrime)  //IIFE function call

//output: 55