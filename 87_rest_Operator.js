// ...rest = we can take as much you want arguments through the rest operator..

let func =((...rest)=>{
    console.log(rest)
})

let arr =[1,2,3,4,5,6]

func(arr)