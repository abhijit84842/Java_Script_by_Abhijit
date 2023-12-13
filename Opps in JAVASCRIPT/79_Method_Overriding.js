class Employee{
    login(){
        console.log(`Employee has logged in `)
    }
    logout(){
        console.log(`Employee has logout `)
    }
    requestLeaves(leaves){
        console.log(`Employee has requested ${leaves} days leaves`)
    }
}

class Programmer extends Employee{
    requestCoffe(x){
        console.log(`Employee has requested ${x} cofees`)
    }
    requestLeaves(leaves){      // method overriding
        //console.log(`Employee has requested ${leaves + 1 } days leaves(one extra)`)
        super.requestLeaves(leaves+1)       // super => is use to cal the parent class method
        console.log("one extra is granted")
    }
}

let e= new Programmer()
e.login()

e.requestLeaves(3)

e.logout()