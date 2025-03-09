{
    //Anstaction 1.interface 2.abstract
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

}