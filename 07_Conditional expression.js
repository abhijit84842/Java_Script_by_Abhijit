// run this program in browser...

winning_number=50
let a =prompt("plz enter the number : ")
if (a ==winning_number){
    alert("you win !!")
}
else if(a>winning_number){
    alert("too high..")
}
else if(a<winning_number){
    alert("too low..")
}
else{
    alert("invalid input..")

}

// javascript tarnary operator...
/*
condition ? exp1 : exp2
*/
let age=prompt("Enter your age : ")
console.log("you can", (age>18? "drive" : "not drive"))