{
    //Anstactionআপেসট্রাকশন দুই ভাবে করা যায় ইন্টারফেস এন্ড অ্যাবস্ট্রাক্ট 1.interface 2.abstract
    //idea
    interface vhicle1{
        starEngine():void;
        stopEngine():void;
        move():void;
    }
    //real implementation
    class car implements vhicle1{
        starEngine(): void {
            console.log("car started");
        }
        stopEngine():void{
            console.log("car stopped");
        }
        move():void{
            console.log("car moving");
            
        }
        test():void{
            console.log("test");
        }

    }

    const toyota=new car()
    toyota.starEngine()

    //abstract
    // idea
   abstract class car2{
        abstract starEngine():void;
        abstract stopEngine():void;
        abstract move():void;
    }

    class ToyotaCar extends car2{
        starEngine(): void {
            console.log("car started");
        }
        stopEngine():void{
            console.log("car stopped");
        }
        move():void{
            console.log("car moving");
            
        }
    }
   

}