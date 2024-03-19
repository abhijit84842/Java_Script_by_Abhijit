/*
Hosting => its refers to the process  where the interpreter appers to move the diclarations to the top of the code before execution.

//  *** Declearation are hoisted to the top but initialization is not...
*/


// Function , class , var are hoisted to the top but..
// Function Expression , Class Expression , let const are not hoisted to the top.




// function => are hoisted..
goodmorning()
function goodmorning(){
    console.log("Good Morning")
}


// Function Expression = > are not Hoisted..
great()
let great= function(){
    console.log("This is Great..")
}



var a20 // declear (declearation hoisted to the top bt not initialazion.)
console.log(a20)
// var a21 // declear 
a20= 20 //initialize





//console.log(b1) // throw error => can't access before initializtion

let b1= 10 // declear + initialize

console.log(b1)

let carName
carName="Nexa"
console.log(carName)

// const = > are not hoisted..
console.log(c1)
const c1= 13


