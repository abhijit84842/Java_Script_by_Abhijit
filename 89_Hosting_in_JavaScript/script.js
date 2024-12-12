/*In JavaScript, a variable can be declared after it has been used.

In other words; a variable can be used before it has been declared
*/


/*
Hosting => its refers to the process  where the interpreter appers to move the diclarations to the top of the code before execution.

//  *** Declearation are hoisted to the top but not initialization...

NOTE:- 1) javaScript only hoists the declearation not initialization

// Function , class , var are hoisted(declearation) to the top but..
// **** Function Expression , Class Expression , let const are not hoisted to the top. that means we can't access before its decleration.


*/

// function => are hoisted..
goodmorning()

// function declearation :- it goes to the top before it execution
function goodmorning(){
    console.log("Good Morning")
}


// Function Expression = > are not Hoisted..
great()
let great= function(){
    console.log("This is Great..")
}



x = 5; // Initialize 5 to x
console.log(x)                  // Display x 
var x; // Declare x

var y; // Declare y
y = 10; // Initialize 10 to y
console.log(y)      // // Display y




/*Variables defined with let and const are hoisted to the top of the block, but not initialized.

Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.

** Using a let variable before it is declared will result in a ReferenceError.

The variable is in a "temporal dead zone" from the start of the block until it is declared:
*/

// for let 
carName="BMW"       // Initialize 
let carName;    // Declare 
console.log(carName)    // error


/*
// for const 
car = "Volvo";     // Initialize 
const car;       // Declare 
console.log(car)

*/