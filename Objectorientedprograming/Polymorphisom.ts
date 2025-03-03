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
            console.log("devoloper is sleeping 4 hours a day");
        }
    }

    const getsleepingHours=(param:Person)=>{
        param.getSleep();
    }

    const person1=new Person();
    const person2=new Student();
    const person3=new devoloper();


    class shape{
        getArea():number{
            return 0
        }
    }
    class circle extends shape{
        radius:number;
        constructor(radius:number){
            super();
            this.radius=radius;
        }
        getArea():number{
            return Math.PI*this.radius*this.radius;
        }
    }
    class rectangle extends shape{
        width:number;
        height:number;
        constructor(width:number,height:number){
            super()
            this.width=width;
            this.height=height;
        }
        getArea():number{
            return this.width*this.height;
        }
    }


}