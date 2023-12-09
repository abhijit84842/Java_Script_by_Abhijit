// Fetch api => javascript can be used to send and returns information form the network when needed(AJAX).fetch api used toget data over the network .

let promise1 =fetch("https://goweather.herokuapp.com/weather/Ny")
promise1.then((response)=>{
  console.log(response.status)    // to check the status code
  console.log(response.ok)  // ok return the boolean , true if the HTTP Status code is 200-299

  return response.json()

}).then((value2)=>{
  console.log(value2)
})
