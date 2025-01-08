

    class animal{

        constructor(public name: string, public species: string, public sound: string) {

        }
        makeSound(){
            console.log(`${this.name}${this.sound}`)
        }
    
    }
    const dog= new animal("dog","dog","bark")
    const lion=new animal("lion","lion","roar")
    dog.makeSound()
    /*    class animal{
        name:string;
        species:string;
        sound:string;
        constructor(name: string, species: string, sound: string) {
            this.name = name;
            this.species = species;
            this.sound = sound;
        }
        makeSound(){
            console.log(`${this.name}${this.sound}`)
        }
    
    }
        */




