"use strict";
let add;
function sum(...numbers) {
  add=0;
  for (var num of numbers){
    add += num;
  }
  return add;
}
let addition=sum(1,2,3,4);
console.log("Equals", addition);

//enter fixed parameter followed by rest Parameter
function studentDetails(name, ...courses){
  console.log("Name of the student is:" + name);
  console.log("Subjects: \n");
  let subject;
  for(subject=0;subject<courses.length;subject++){
    console.log(courses[subject]);
  }
}
studentDetails("Chris","Javascript","Python","Scala");

/*
//another example
function sum(x,y){return x + y};

let additionNew = sum(1,2,3,4);
console.log(additionNew);

//simplified
var addup = function(x,y){return x+y};
console.log(addup(4,1));
*/
