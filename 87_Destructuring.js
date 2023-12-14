/* Destructuring => destructuring assignment is used to unpack values from an array , or properties from objects, 
into distinct variables. */

// for array
let arr = [3,5,8,9,12,14]
let [a , ,c , ...rest ]  =arr       
console.log(a , c , rest)       // Output => 3 8 [ 9, 12, 14 ]


//for object 
let {x , y}={
    x:5,
    y:10
}

console.log(x , y)


