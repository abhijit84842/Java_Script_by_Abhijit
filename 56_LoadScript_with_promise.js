const laoadScrpit = (src)=>{
    return Promise((resolve,reject)=>{
      let script = document.createElement("script")
      script.type = "text/script"
      script.src = src
      document.body.appendChild(script)
      
      script.onload = ()=>{
        resolve(1)
      }
      script.onerror = ()=>{
        reject(0)
      }
      
    })
  }
  
  let p1= loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js")
  p1.then((value)=>{
    console.log(value)
  }).catch((error)=>{
    console.log("we are sorry but we are having problemls loading this script")
  })