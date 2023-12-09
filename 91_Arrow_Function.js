
// 1st example:-
const sayHello =(name)=>{
    console.log("hi...." + name)
}
sayHello("Abhi")  // call function

// 2nd example
const sayHello2 =(name , greeting)=>{
    console.log(greeting + " " +name)
}
sayHello2("hi Everyone" , "Good Afternoon")

// 3rd example
const x= {
    name : "Abhijit",
    role : "JS Developer",
    exp : 2,
    show : function(){
        setTimeout(()=>{
            console.log(`The name is ${this.name}`)     // this will refer to the x object
        },5000)
        

    }
}
x.show()

