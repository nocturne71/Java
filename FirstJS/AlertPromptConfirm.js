"use strict";

alert("This is an alert message");

let name = prompt("Message is : \nPlease enter your name:");
console.log("yopu have entered " + name);
let subject = prompt("Subject is :" , "Javascript");
console.log("your subject is " + subject);

let output = confirm("Confirmation message: \nReady to move onto the next demo ?");
if (output) {
    console.log("you pressed OK");
}
else {
  console.log("You pressed cancel");
}
