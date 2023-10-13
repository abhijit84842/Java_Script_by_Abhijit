// for loop in js..
for (let i=0; i<=35; i++){
    console.log(i)
}


// sum of n natural number ...
sum=0
n=parseInt(prompt("Enter the n number : "))

for (let i=0; i<n; i++){
    sum +=(i+1)
}
console.log(sum)


// for in loop..

let obj={
    'Abhi': 50,
    'raj' : 60,
    'rohan' : 80
}

for (let i in obj){
    console.log("mark of " + "are" + obj[i])
}

// for of loop..
for (let b of "abhi"){
    console.log(b)
}

