let arr = [1,2,3,4,5,6,7,8,9,10]
let resAnon = [];
let resIIFE = [];

//implementing anonymous function
let anonFunc = function(){ arr.forEach((e)=>{
  if(e%2!==0){
      resAnon.push(e)
  }
})
console.log(resAnon.join(" "))
}
anonFunc(); // anonymous function call
//Output - 1,3,5,7,9

//implementing IIFE function
let iifeFunc = (function(){
    resIIFE.push(arr.filter(e=>e%2!==0));
    return resIIFE.join();
}) ();

console.log(lifeFunc); // IIFE function call
//Output - 1,3,5,7,9
