// for loop in js..
for (let i=0; i<=35; i++){
    console.log(i)
}


// sum of n natural number ...
sum=0
n=parseInt(prompt("Enter the n number : "))

for (let i=0; i<n; i++){
    sum = sum +i
}
console.log(sum)


// take a string input..
str=prompt("enter your name: ")
for (let i =0; i < str.length; i++){
    console.log(str[i])
}


// for in loop..

let obj={
    'Abhi': 50,
    'raj' : 60,
    'rohan' : 80
}

for (let i in obj){
    console.log(i)      // to print the key
    console.log("mark of " + "are" + obj[i])        // to print the value
  
}

// for of loop..
for (let b of "abhi"){
    console.log(b)
}

