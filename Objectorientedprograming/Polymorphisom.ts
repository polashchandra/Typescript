{
    class person{
        getSleep(){
            console.log("Person is sleeping 8 hours a day");
        }
    }
    class Student extends person{
        getSleep(){
            console.log("Student is sleeping 6 hours a day");
        }
    }
    class devoloper extends person{
        getsleep(){
            console.log("devoloper is sleeping 4 hours a day")
        }
    }
}