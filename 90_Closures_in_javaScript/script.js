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



//Ex 2=>
function returnFunc() {
  const x = () => {
    let a = 1; // local variable of x
    console.log(a);

    const y = () => {
      // let a = 2; //local variable of y
      console.log(a);

      const z = () => {
        //   let a = 3;
        console.log(a); //local variable of z
      };
      z();
    };
    a = 90;  // update the value 
    y();
   
  };
  return x;
}

let c = returnFunc();
c();
