"use strict";

let studentGrades = ["A","B",3,"D",5];
console.log("Length :" + studentGrades.length);
console.log("Element at index 3: ", studentGrades[3]);
console.log("Element at index -3: ", studentGrades[-3]);

//iterating through array - new syntax
var i;
for (i of studentGrades){
  console.log(i);
}

//create new Array
var j;
console.log("Elements in vowels: ");
let vowels = new Array("A", "E", "I", "O", "U");
for ( j of vowels){
  console.log(j);
}
//initialise a blank Array
var k;
let grades = [];
grades[0]="A";
grades[1]="B";
grades[2]="C";
grades[3]="D";
grades[4]="E";
grades[7]="H";

console.log("length: ", grades.length);
console.log("Elements in the grades array: \n");
for (k of grades){
  console.log(k);
}

let testScores = [43,64,81,91,39,73];
function flagGoodScore(score){
  if(score>70){
    console.log(`The score of ${score} is good!`);
  }
}
console.log("iterating over the test scores forEach: ");
testScores.forEach(flagGoodScore);
