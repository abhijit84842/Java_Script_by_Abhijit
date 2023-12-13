class RailwayForm{
    submit(){       //class method
        alert(this.name + " : form is submitted and Train no is : " + this.trainno)
    }
    cancel(){   // class method
        alert(this.name +  " : This form is cancelled and Train no is : " + this.trainno)
    }
    fill(givenname,trainno){
        this.name = givenname
        this.trainno=trainno
        

    }
}


let abhi = new RailwayForm()        // create object 
abhi.fill("Abhijit Das" , 12345)
abhi.submit()


let ayan = new RailwayForm()
ayan.fill("Ayan Munshi" , 22458)
ayan.submit()
ayan.cancel() 