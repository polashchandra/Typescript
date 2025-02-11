{
class Animal {
    name:string;
    species:string;

    constructor(name:string,species:string){
        this.name=name;
        this.species=species;
    }
    makesound(){
        console.log("I am making sound");
        
    }
}
class dog extends Animal{
    constructor(name:string,species:string){
        super(name,species)
    }
    makeBrak(){
        console.log("I am barking");
    }
}
class cat extends Animal{
    constructor(name:string,species:string){
        super(name,species)
    }
    makeCaw(){
        console.log('i am cawing');
    }
}

const dog1=new dog("dog","mammmal");
const cat2 =new cat("cat","cawing");


}