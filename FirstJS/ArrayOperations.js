"use strict";
//shallow copy is a pointer to the original array
let prices = new Array(10,20,36,40,47);
let shallowCopy = prices;
console.log("Before changing shallowCopy, prices: ", prices);
//changes affect both arrays
shallowCopy[0]=70;
console.log("After changing shallowCopy, prices: ", prices);

//deep copy copies full array
let deepCopy= prices.slice();
console.log("before changing deepCopy, prices: \n", prices);
deepCopy[0] = "Eighty";
console.log("After changing deepCopy, prices: ", prices);
console.log("Contents of deepCopy: \n", deepCopy);

//add element to end of arrays
prices.push(100);
console.log("Contents after push: \n", prices);
//add element to beginning of array
prices.unshift(0);
console.log("Contents after unshift: \n", prices);
//remove element at end of arrays
prices.pop();
console.log("Contents after pop: \n", prices);
//remove element to beginning of array
prices.shift();
console.log("Contents after shift: \n", prices);
//remove element in arrays
delete prices[2];
console.log("Contents after delete: \n", prices);

//adding elements to array using splice
let dogBreeds = ['Labrador','Beagle','Golden Reteiever','Doberman','German Shaepard','boxer'];
console.log("Original contents of dogBreeds :\n", dogBreeds);

//splice - performs operations in place and modifies array
//variable.splice(indextoinsertfrom, noOfelementstoremove, 'data', 'data')
dogBreeds.splice(3,0,'Poodle','Dalmation');
console.log("contents of dogBreeds after splice :\n", dogBreeds);
//slice and insert at element 1 and delete two element
dogBreeds.splice(1,2,'Indi');
console.log("contents of dogBreeds after splice(1,2,'Indi') :\n", dogBreeds);


//slice - performs operations on a copy of the array
let sliceOfDogBreeds = dogBreeds.slice(3); //copt of array from place 3
console.log("dogBreeds.slice (3)=\n", sliceOfDogBreeds);

sliceOfDogBreeds = dogBreeds.slice(3,5); //copy of array with elements between 3 to  5
console.log("dogBreeds.slice (3,5) elements 3,4 but not 5=\n", sliceOfDogBreeds);

sliceOfDogBreeds = dogBreeds.slice(-3,-1); //copy of array with elements From back excluding last
console.log("dogBreeds.slice (-3,-1) last 3 excluding last 1=\n", sliceOfDogBreeds);
