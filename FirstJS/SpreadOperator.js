 "use strict";

 console.log("the min of 1,2,3:", Math.min(1,2,3) );

 //using spread function
 let arr1=[1,2,3];
//1st syntax DOES NOT WORK
console.log("The min of arr1 (without spread):", Math.min(arr1));
//with Spread
console.log("The min of arr1 (with spread):", Math.min(...arr1));


 let arr2=[4,5,6];
 let arr3=[3,7,2];
console.log("The min of arr1 (with spread):", Math.min(...arr2));
console.log("The min of arr2 and arr3 and more:", Math.min(...arr2,0, ...arr3, 8));

let arrays = [...arr1,10,...arr3,20];
console.log("Array created by combining spread operators with integers: \n", arrays);


//using strings
let str="Skillsoft";

console.log("str =", str);
console.log("Array formed by spreading str:", [...str]);
console.log("Array formed with Array.from(str): \n",Array.from(str));
