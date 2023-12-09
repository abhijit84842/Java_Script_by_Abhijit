/*In JavaScript, a variable can be declared after it has been used.

In other words; a variable can be used before it has been declared
*/

x = 5; // Initialize 5 to x
console.log(x)                  // Display x 
var x; // Declare x

var y; // Declare x
y = 10; // Initialize 10 to x
console.log(y)      // // Display y




/*Variables defined with let and const are hoisted to the top of the block, but not initialized.

Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.

** Using a let variable before it is declared will result in a ReferenceError.

The variable is in a "temporal dead zone" from the start of the block until it is declared:
*/

// for let 
carName="BMW"       // Initialize 
let carName;    // Declare 
console.log(carName)


/*
// for const 
car = "Volvo";     // Initialize 
const car;       // Declare 
console.log(car)

*/