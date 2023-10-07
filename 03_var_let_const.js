// discuss about why we will use let and const instead of var


var a= 45   // Var is globally scoped
var a=12    // change the variable..
console.log(a)



let b="abhijit" 

{
    let b="Javascript"  // let is block scoped
    console.log(b)

}
console.log(b)

let num=2023   
// let num = 210  // we can't re declare let 
num=45      // let can be updated but not re declare..
console.log(num)


const coder="Abhijit Das"       // const can neither be update nor be re declare..
//coder="rajat"       (can;t not update)
console.log(coder)
