/* Spread Operator => The spread (...) syntax allows an iterable, such as an array or string, 
to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. In an object literal,
This allows us to quickly copy all or parts of an existing array into another array. */

//expend the array
let orginalarr= [1,2,3]
let newarr= [4,5 , ...orginalarr]
console.log(newarr)

// use to copy
const arr1=["apple", "banana"]
const copyarr2=[...arr1]
console.log(copyarr2)       // output => [ 'apple', 'banana' ]


// to marge 2 array
const arr11=["apple", "banana" , "kiwi"]
const arr12= ["orenge", "grapes" , "dragon fruits"]
const margerarr= [...arr11 , ...arr12]
console.log(margerarr)          // Output => [ 'apple', 'banana', 'kiwi', 'orenge', 'grapes', 'dragon fruits' ]



// to take unlimited argument in function
function elementvalue(...elements){
    console.log(elements)   
}
elementvalue(1,6,7,8,45)        // Output => [ 1, 6, 7, 8, 45 ]


// use in object 
let obj = {
    name : "Abhijit",
    company : "XYZ",
    address : "DSA 123"
}

console.log({...obj})      //  Output=> { name: 'Abhijit', company: 'XYZ', address: 'DSA 123' }

console.log({...obj , name : "Coder Bhai"})     // Output=> { name: 'Coder Bhai', company: 'XYZ', address: 'DSA 123' }

// Marge the Object
let obj10 ={
    name:"abhijit",
    roll:25,
    nickName:"Rintu",
  }
  
  let obj11={
   address:"C.K Town",
   pin:721201,
  
  }
  
  let margeObj={
    ...obj10 ,...obj11
  }
  console.log(margeObj)