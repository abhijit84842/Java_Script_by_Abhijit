// 1) Why we can change the const object value , where we already know that we can't update or re-declear const
// => because we know const prevent re-assignment or re-declear but objects works in reference and so , we can update the object value.

const Tech = {
    name :"JS"
}
/*
Tech ={
    roll:24         // TypeError: Assignment to constant variable.
} */
Tech.name ="React"

console.log(Tech.name)      // Output => React



// 2) how we can make a real object to real const
const Tech ={
    name : "JS"
}
Tech.version ={name:1 }     // Create Nested object using version keyword
Object.freeze(Tech)     // freeze the object So, it will not update
Tech.name ="React"
Tech.version.name="Aditya"  // we can update nested object 
console.log(Tech.name)      // Output => JS (not updated)
console.log(Tech.version.name) // Output => Aditya