
// for loop..
let num=[1,2,34,5,6]
for (let i =0; i<num.length; i++){
    console.log(num[i])
}


// Array from..(used to create an array from any other object..)        HTML collections
let name="abhijit"
let arr=Array.from(name)
console.log(arr)


// for of loop..(accessing the array element)
let s="Coding"
for (let i of s){
    console.log(i)
}


// for in loop (used in objecet )
// array is also a object like key and value pair..

let num1=[1,2,3,4,5,6,7,8,9,10]
for (let i in num1){
    console.log(num1[i])
}