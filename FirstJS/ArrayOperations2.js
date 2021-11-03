"use strict";
//concatenation of Arrays

let europeOffices = ['Bucharest','Prague','Rome'];
let africaOffices = ['Durban','Nairobi'];
let oceanOffices = ['ChristChurch', 'Sydney'];

//combine into onearray, returns new array, original unmodified
let southernOffices = africaOffices.concat(oceanOffices);
console.log("southernOffices:", southernOffices);
console.log("africaOffices:", africaOffices);
console.log("oceanOffices", oceanOffices);

let allOffices = africaOffices.concat(oceanOffices,europeOffices);
console.log("allOffices:", allOffices);

//sort Arrays
let sortedOffices = allOffices.sort();
console.log("sortedOffices: ", sortedOffices);
//sort was done in place an has modified orignail Arrays
console.log("allOffices:", allOffices);
// to keep order, use slice to copy Arrays

//reverse sort
console.log("Reverse sorting of allOffices:\n", allOffices.reverse());
console.log("allOffices:", allOffices);

//perform sort on copy
allOffices = africaOffices.concat(oceanOffices,europeOffices);
console.log("allOffices:", allOffices);
//method 1 - copy using spread syntax
console.log("Sorted copy of allOffices using spread syntax:\n", [...allOffices.sort()]);
console.log("allOffices after sort:", allOffices);
//method 2 - using slice
allOffices = africaOffices.concat(oceanOffices,europeOffices);
console.log("Sorted copy of allOffices using slice:\n", allOffices.slice().sort());
console.log("allOffices after sort:", allOffices);

//using sort method on Numberical functions
let numArray = [20,50,3,10,35];
console.log("original elements in numArray\n", numArray);

console.log("Sorted using default sort:\n", numArray.slice().sort()); //performs alphabetical sorting
//to sort numerically
//function a,b compares 2 values, if a-b is negative, sort knows it is smaller and should appear before
numArray.sort(function(a,b){return a-b});
console.log("Sorted using numerical sort:\n", numArray);
numArray.sort(function(a,b){return b-a}); //reverse sort
console.log("Sorted using reverse numerical sort:\n", numArray);
