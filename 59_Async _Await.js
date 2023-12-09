// any async function always return a promise

async function weather(){

  let delhiweather  =  new Promise((resolve , reject)=>{
    setTimeout(()=>{
      resolve("27 degree")
    },3000)
  })

  let westBengal  =  new Promise((resolve , reject)=>{
    setTimeout(()=>{
      resolve("20 degree")
    },5000)
  })

  //delhiweather.then(alert)
  //westBengal.then(alert)

  console.log("fetching delhi weather please wait...")
  let delhiW =  await delhiweather    // untill this promise is not fullfilled it wil not go next line(stop the function execution).
  console.log("Successfully fetched delhi weather.. " + delhiW)


  console.log("fetching West Bengal weather please wait...")
  let westB = await westBengal
  console.log(" Successfully fetched West Bengal weather.. " + westB)



  return [delhiW , westB]

}
console.log("welcome to weather control room.")
let a =weather()
console.log(a)


