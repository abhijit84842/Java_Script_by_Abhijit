
let num=[1,23,45,67,7,8,9]
let b=num.toString()  // convert in string
console.log(b)
console.log(typeof b)       // output => string


// join method
console.log(num.join("_"))  

// pop method
let n=[10,20,30,40]
poped_item=n.pop()
console.log(n)
console.log(poped_item)


// push method
let a=[1,2,3,4]
a.push(5)
console.log(a)      // output-> [1,2,3,4,5]  add in last 


// shift()   -> it remove thhe first element and return it

let a1=[12,45,65,100]
a1.shift()
console.log(a1)     // output => [ 45, 65, 100 ]



// unshift()  -> add element to the begining and return new array length
let b1=[12,45,65,100]
returned_items=b1.unshift(200)      // it return new array length
console.log(returned_items)             // 5
console.log(b1)                             // [ 200, 12, 45, 65, 100 ]


// delete -> it a operator..
let num1=[1,2,3,4,5]
console.log(num1.length)    
delete num1[0]
console.log(num1)               // [ <1 empty item>, 2, 3, 4, 5 ]
console.log(num1.length)            // array length will not change..


// concat -> it not change the existing array and return a new array..
let n1=[1,2,3]
let n2=[4,5,6]
let n3=[7,8,9]

newarray=n1.concat(n2,n3)
console.log(newarray)



// sort()           // it change the orginal array..
let num20=[2,5,1,56,22,44,]
num20.sort()    // it sort alphabtically
console.log(num20)      // output-> [ 1, 2, 22, 44, 5, 56 ]


// sort in Assending order..
function compare(a,b){
    return a-b
}
let num21=[551,22,3,14,5,6,7,8,299]
num21.sort(compare)
console.log(num21)              /*[
                                      3,  5,   6,   7, 8,
      OUTPUT->                          14, 22, 299, 551
                                  ] */


// sort in decending order..
function compare(a,b){
    return b-a
}
let num22=[551,22,3,14,5,6,7,8,299]
num22.sort(compare)
console.log(num22)                  /* [
                output->                     551, 299, 22, 14, 8,
                                                 7,   6,  5,  3
                                        ]*/



// reverse()
let num23=[1,2,3,4,5,6]
num23.reverse()
console.log(num23)



//  splice()            -> it modify the orginal array..
let num24=[551,22,3,65,45,7,8,9]
num24.splice(2,3,1024,1025,1034)
console.log(num24)


// slice ()  -> not change the orginal array ...
let num25=[1,2,3,4]

newArray=num25.slice(2)

newArray1=num25.slice(1,3)

console.log(newArray)       // output -> [ 3, 4 ]

console.log(newArray1)          // [ 2, 3 ]



