// map function   (its return a new array)
// map create a new array but
// foreach loop not create new array...its only use to perform any operation..
let num=[10,50,100]
let arr=num.map((values)=>{
    console.log(values)
    return values +1
})
console.log(arr)



// filter function..        (its return a new array)
let num1=[55,20,45,2,1,6,80,90]
let newarr=num1.filter((a)=>{
    return a<10
})
console.log(newarr)


// reduce function..        (its returns a value not an array...)
let n=[1,2,3]
let newValue=n.reduce((a,b)=>{
    return a+b
})

console.log(newValue)           // output -> 6
