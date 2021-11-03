"use strict";

let numbers =[10,20,30,40];

let [a,b,c,d]=numbers;

console.log("Value of a:",+a);
console.log("Value of b:",+b);
console.log("Value of c:",+c);
console.log("Value of d:",+d);

[a, ...b] = numbers
console.log("Value after [1,...b] :\n");
console.log("Value of a:", + a );
console.log("Value of b:", + b );

[, ...a] = numbers
console.log("Value after [1,...b] :\n");
console.log("Value of a:", + a );
