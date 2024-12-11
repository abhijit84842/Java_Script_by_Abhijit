
// An array is a special variable, which can hold more than one value:

// arrays are mutable so it can changeable...

let marks=[20,35,21,15,98]
console.log(marks)      // [ 20, 35, 21, 15, 98 ]

let marks1=[10,20,60,98,null,'not present']
console.log(marks1)     // output=> [ 10, 20, 60, 98, null, 'not present' ]  // length=> 6
console.log(marks1[0])
console.log(marks1[1])
console.log(marks1[2])
console.log(marks1[3])
console.log(marks1[4])
console.log(marks1[5])

// adding value in array
marks1[6]=78
console.log(marks1[6])          // 78

console.log(marks1.length)      // 7 

console.log(typeof marks1)      // object




// for loop in array..
 let a1=["abhi","coding", 1 ,5.50, 80 ,90,100]
for (let i in a1){
    console.log(a1[i])
}




