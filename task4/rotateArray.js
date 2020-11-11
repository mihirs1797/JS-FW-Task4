// let arr = [elements]

//anonymous function
var rotate = function(nums,k){
    let i =0;
    while(i<k){
        nums.unshift(nums.splice(-1,))
        i++
    }
    return nums;
}

//rotate(arr, rotateSize); 

let rot = (function(){
    let i =0;
    while(i<rotateSize){
        arr.unshift(arr.splice(-1,))
        i++;
    }
    return arr;
}) ();

//console.log(rot);