"use strict";

function mphToKmph(mph) {
  console.log("MPH value entered: ", mph);
  return 1.61 * mph;

}

let speedLimit = mphToKmph(65);
console.log("Speed Limit in Km/h: ", speedLimit);

//same function as above, but condensed
let mphToKmphArrow = mph => {
    console.log("MPH value entered: ", mph);
  return 1.61 * mph;
}
speedLimit = mphToKmph(65);
console.log("Speed Limit in Km/h: ", speedLimit);

//implicit function. return not required as it is implicit
let mphToKmphImplicit = mph => 1.61 * mph;
speedLimit = mphToKmph(65);
console.log("Speed Limit in Km/h: ", speedLimit);

//implicit function. retwo imput
let triangleArea = (base, height) => 0.5 * base * height;
console.log("area of triangle with base of 5 and height of 4: ", triangleArea(5,4));

//assign function to variable
let functionCopy = triangleArea;
console.log("Area of a triangle with base of 8 and height of 14: ", functionCopy(8,14));

//anonymous functions
var x = function(f){return 5 * (f-32) / 9};
console.log("50F in celsius is: ",x(50));
