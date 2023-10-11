// take a input of age from user so that age will be 10-20.. 

const prompt =require("prompt-sync")({sigint: true});       // to run the prompt in vs code..
let age =prompt("Enter your age : ")

if (age>=10 && age<=20){
    alert("you are eligible..")
}
else{
    alert("not eligible..")
}


// write a program to find whether a number is divisible by either 2 or 3..

let num=parseInt(prompt("Enter the number : "))
if (num%2==0 && num%3==0){
    alert("right number..")
}
else{
    alert("wrong number...")
}

