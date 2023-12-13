class RailwayForm{
    constructor(givenname , trainno){          // Create constructor using Constructor built in method
        console.log("Constructor Called with" + "Person Name : " + givenname + " Train NO : " + trainno)     // it automatically called when object is created .
        // fill the form with person name and train no.
        this.name = givenname   // set name
        this.trainno=trainno       // set Train No
    }

    submit(){       //class method
        alert(this.name + " : form is submitted and Train no is : " + this.trainno)
    }
    cancel(){   // class method
        alert(this.name +  " : This form is cancelled and Train no is : " + this.trainno)
    }
  
   
        


}


let abhi = new RailwayForm("Abhijit Das" , 12345 )        // create object 
abhi.submit()


let ayan = new RailwayForm("Ayan Munshi" , 22587)
ayan.submit() 
ayan.cancel() 

