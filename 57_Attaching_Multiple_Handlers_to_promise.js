let p1 = new Promise((resolve,reject)=>{
  alert("i am not resolve...")
  setTimeout(()=>{
    resolve(1)
  },2000)
})


p1.then((value)=>{
  console.log("congratulation this promise is resolved...")
  console.log(value)
})
p1.then(()=>{
  console.log("hurray successfully done ! ")
})