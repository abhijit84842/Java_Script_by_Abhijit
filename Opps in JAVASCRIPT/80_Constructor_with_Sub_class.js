class Employee{
    constructor(name){
        console.log(`${name} - Employee's Constructor is called.`)
        this.name=name
    }
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
    /*constructor(){        // if there is no constructor in the child class, this is created automatically..
        super()
    }*/
    requestCoffe(x){
        console.log(`Employee has requested ${x} cofees`)
    }
    requestLeaves(leaves){      
        //console.log(`Employee has requested ${leaves + 1 } days leaves(one extra)`)
        super.requestLeaves(leaves+1)      
        console.log("one extra is granted")
    }
}

let e= new Programmer("Jaydeep")
e.login()

e.requestLeaves(3)

e.logout()


// NOTE:- Constructor in inheritance classes must call super(...) and do it before using  this.  keyword.