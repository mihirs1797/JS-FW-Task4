let arr = [1,1,2,2,2,3,4,5,5,5,6,6,7]
let result = [];
let nonDuplicate = function(arr){
    let res = [...new Set(arr)];
    console.log(res) 
}

nonDuplicate(arr); //1,2,3,4,5,6,7

let unique = (function(){
    result = [...new Set(arr)];
    return result;
}) ();

console.log(unique); //1,2,3,4,5,6,7