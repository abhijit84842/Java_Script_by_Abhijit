/* Closure => Closure in JavaScript is a form of lexical scoping used to preserve variables from the outer scope of a function in the inner scope of a function.
 Lexical scoping is the process used to define the scope of a variable by its position in the source code 
 
Closure=> it is a function along with lexical enviourment.
 */

message="GODD Global.." // global variable
function hello1(){
   let message="Good Morning"      // local variable
   {
    let message = "Good Afternoon"
    console.log("hello everyone : "+message)
   }
   let c = function hello2(){
    console.log("hi i am Boss " + message)
   }
   return c

    
}
let return_value=hello1()
return_value()
