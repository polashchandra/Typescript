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
//  smart way to chandle korar jonno chaole ,ara function benohar korte pari
const isdog=(animal:Animal):animal is dog=>{
    return animal instanceof dog; 
}
const iscat =(animal:Animal):animal is cat=>{
    return animal instanceof cat;
}
const getAnimal=(animal:Animal)=>{
    if(isdog(animal)){
        animal.makeBrak()
    }else if(iscat(animal)){
        animal.makeCaw();
    }else{
        animal.makesound()
    }
}

const dog1=new dog("dog","mammmal");
const cat2 =new cat("cat","cawing");


}