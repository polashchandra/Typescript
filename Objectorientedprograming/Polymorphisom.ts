{
    class Person{
        getSleep(){
            console.log("Person is sleeping 8 hours a day");
        }
    }
    class Student extends Person{
        getSleep(){
            console.log("Student is sleeping 6 hours a day");
        }
    }
    class devoloper extends Person{
        getsleep(){
            console.log("devoloper is sleeping 4 hours a day")
        }
    }

    const getsleepingHours=(param:Person)=>{
        param.getSleep()
    }

    const person1=new Person();
    const person2=new Student();
    const person3=new devoloper();
}