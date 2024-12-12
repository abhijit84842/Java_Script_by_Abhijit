
// What are Sparse array => it is an array where not all the indexes are populated with values.it means there are holes in the that array.


let arr= []

arr[2]=12

arr.forEach((item)=> console.log(item))         // Output => 12

// here output is 12 because forEach method skips the holes in array