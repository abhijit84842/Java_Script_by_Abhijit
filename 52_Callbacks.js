// callback function=> A callback is a function that is passed as an argument to another function, and is called after the main function has finished its execution. The main function is called with a callback function as its argument, and when the main function is finished, it calls the callback function to provide a result.


function mainFunction(callback) {
    console.log("Performing operation...");
    // Use setTimeout to simulate an asynchronous operation
    setTimeout(() =>{
      callback("Operation complete");   //call the callbackFunction within main function and passing parameter to callbackFunction()
    }, 1000);
  }
   
  // Define the callback function
  function callbackFunction(result) {
    console.log("Result: " + result);
  }
   
  // Call the main function with the callback function
  mainFunction(callbackFunction);
