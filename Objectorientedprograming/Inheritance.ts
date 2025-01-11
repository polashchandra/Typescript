{
    class student {
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

    const student1=new student("polashchandra",20,"kayempur")
    class teacher{
        name:string;
        age:number;
        address:string;
        desicnation:string;
        constructor(name:string,age:number,address:string,desicnation:string){
            this.name=name;
            this.age=age;
            this.address=address;
            this.desicnation=desicnation;
        }
        getsleep(numofHousrs:number){
            console.log(`${this.name} is sleeping for ${numofHousrs} hours`)
        }
        takeclass(numOfClass:number){
            console.log(`${this.name}will take ${numOfClass}`);
        }
    }
    
}