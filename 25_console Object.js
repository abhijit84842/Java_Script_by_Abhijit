console.log("hi i am Abhijit Das")

// error alert sms
console.error("hey this is indentation error..")

// warrimg alert sms
console.warn("don't do again")

// condition assert..
console.assert(5>52)

// to clear console..
console.clear()

// table creation
obj={
    a:1,
    b:2,
    c:3,
    d:4
}
console.table(obj)

// to see the information 
console.info("hey this is important information")

// Groups console log s togather in a collapsible group.
console.group();

//End a group created by console.group()
console.groupEnd()

// Makes assertions and logs an errpr massage if the assertion is false.
console.assert()


// console.dir()  vs console.log()
/* console.log()=> Shows the element DOM Tree.
conosle.dir()=> Shows the as an object with its properties.
*/
console.dir()



// how many time will take a for loop
console.time("t1")
for (let i=0; i<3; i++){
    console.log(233)
}
console.timeEnd("t2")       // stop the timer started by console.time() and logs the elapsed time.
