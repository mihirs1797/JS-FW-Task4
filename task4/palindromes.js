let arr = ['mam','dad','dog']
let res = [];
function test_Palindrome(n){
    if(n === n.split("").reverse().join("")){
        return true;
    } 
}

//implementing anonymous function

let palList = function(arr){
    array.forEach(element => {
        if(test_Palindrome(element)){
            console.log(element)
        }
    });
}

palList(arr); // calling anonymous function

//imeplemeting IIFE function

let palindromes = (function(){
    arr.forEach(element => {
        if(test_Palindrome(element)){
            res.push(element);
        }
    });
    return res.join(" ");
}) ();

console.log(palindromes);