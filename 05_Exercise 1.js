// Question no :- 1
// create a variable type of string and try to add a number to it.

let a="Abhijit"
let b=23

console.log(a+b)

//Output:-> Abhijit23




// Question no:-> 2
// Use typeof operator to find the datatype of the string in last question.

console.log(typeof a)




// Question no:-> 3
//Create a const object in javascript. can you change it to hold a number later ?
const details={
    "name" : "Abhijit",
    "college" : "TINT",
    "Year" : 23

}

//details="change in string"      
//Output:-> error




/// Question :- 4
//Try to add anew row to the const object in probelm 3 were you able to do it...

details['firend']="Ayan Munshi"         // we can add a new key and value in object.
console.log(details)

