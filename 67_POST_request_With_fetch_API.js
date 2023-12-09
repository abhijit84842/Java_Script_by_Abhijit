const createTodo = async()=>{
  let options1 = {
    method: "POST",
    headers:{
       'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      title: 'Abhi',
        body: 'Coder Bhai',
        userId: 27,
    }),

  }


let p = await fetch('https://jsonplaceholder.typicode.com/posts' , options1)    
let response = await p.json()    
  return response

  /*
  .then((response)=>{
    return response.json()
  })
.then((value2)=>{
  console.log(value2)
})
*/

}

const getTodo = async(id)=>{
let response3 = await fetch('https://jsonplaceholder.typicode.com/todos/' + id)
let res3 = await response3.json()
  return res3
}
const mainFunc = async()=>{
  let todo= await createTodo()
  console.log(todo)
  console.log(await getTodo(100))    //call the getTodo function
}
mainFunc()