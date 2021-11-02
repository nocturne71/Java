"use strict";

//use try block and catch block
try {
  document.write("Welcome guest!");
  document.write(Null);
  console.log("No error!");
} catch (e) {
  console.log(e.message);
} finally {

}

//cause an error if the expected input is not correct
function isEven(){
  var a;
  a = document.getElementById('num').value;
  try {
    if((a%2)==0){
      console.log("the entered amount is even");
    }
    else {
      throw "not an even number";
    }
  } catch (e) {
    console.log("the entered value is "+ e);

  } finally {
    console.log("I get executed regardless of the try/catch result");
  }
}
