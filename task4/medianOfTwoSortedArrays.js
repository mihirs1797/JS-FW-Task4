let arr1 = [1,12,15,26,38];
let arr2 = [2,13,17,30,45];
let arr3 = arr1.concat(arr2);
arr3 = arr3.sort((a,b)=> a-b)
let median = 0;
let mid = 0;
//anon function

let med = function(arr){
    if((arr.length%2)===0){
        median = (arr[arr.length/2]+arr[(arr.length/2)+1])/2;
        console.log(median);
    }
    else{
        median=arr[(arr.length/2)+1];
        console.log(median)
    }
}

med(arr3); // OUTPUT 21.5


//IIFE

let middle = (function(){
        if((arr3.length%2)===0){
            mid = (arr3[arr3.length/2]+arr3[(arr3.length/2)+1])/2;
            return mid;
        }
        else{
            mid=arr3[(arr3.length/2)+1];
            return mid;
        }
}) ();

console.log(middle)  