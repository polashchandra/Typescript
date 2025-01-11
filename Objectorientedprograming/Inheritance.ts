{
    class parent{
        name:string;
        age:number;
        address:string;
        constructor(name:string,age:number,address:string){
            this.name=name;
            this.age=age;
            this.address=address;
        }
        getSleep(numofHousrs:number){
            console.log(`${this.name} is sleeping for ${numofHousrs} hours`)
        }
    }


    class student extends parent{

        constructor(name:string,age:number,address:string){
            super(name,age,address)
        }
    }

    const student1=new student("polashchandra",20,"kayempur")
    // 
    class teacher extends parent{

        desicnation: string;

        constructor(name:string,age:number,address:string,desicnation:string){
            super(name,age,address)
            this.desicnation=desicnation;
        }
        takeclass(numOfClass:number){
            console.log(`${this.name}will take ${numOfClass}`);
        }
    }

    const teacher1=new teacher("polashchandra",20,"kayempur","teacher")
    
}