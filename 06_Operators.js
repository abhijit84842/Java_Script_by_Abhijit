// Operator in js 


// Arithmetic operators..
let a=20
let b=5

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a**b)
console.log(a%b)
console.log(a/b)
console.log(++a)        // output -> 21
console.log(--a)         // output -> 20


// Assingment operatos..

let x=2
x+=5
console.log(x)

x**=5
console.log(x)



//comparision operators
let comp1=5;
let comp2=8;
let comp3="8"       //string 
console.log(comp1==comp2)       // false

console.log(comp1!=comp2)       // true

console.log(comp1===comp2)      // false (only check the number)

console.log(comp1!==comp2)      //true

console.log(comp2==comp3)       // true (bacause value is same)

console.log(comp2!=comp3)       //false

console.log(comp2===comp3)      //false(it will also check the data type)

console.log(comp2!==comp3)      // true


// logical operators..

let x1=5;
let y1=6;

console.log(x1>y1 && x1==5)     // false

console.log(x1<y1 && y1==6)     // true

console.log(x1>y1 || x1==5)     //true

console.log(x1>y1 || y1==8)     //false
