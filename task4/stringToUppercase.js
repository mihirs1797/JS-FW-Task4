let str = 'my name is mihir';

//implementing anonymous function

let upCase = function(){
    str = str.toUpperCase();
    console.log(str);
}

upCase(); //anonymous function call

//implementing IIFE function 

let upCaseString = (function(){
    str = str.toUpperCase();
    return str;
}) ();

console.log(upCaseString); //IIFE function call

//output: MY NAME IS MIHIR