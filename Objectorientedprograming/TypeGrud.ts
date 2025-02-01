{

    type Alphanumeric=string|number;
    const add =(pram1:Alphanumeric,pram2:Alphanumeric):Alphanumeric=>{
    ;    if(typeof pram1==="number"&&typeof pram2==="number"){
            return pram1+pram2;
        }else{
            return pram1.toString()+pram2.toString();
        }
    }
    const result=add("2","1")
    console.log(result);
    
    //in guard
    type Normal={
        name:string;
    }
    type Admin={
        name:string;
        role:string;
    }

    const getuser=(user:Normal|Admin)=>{
        if("role" in user){
            console.log(`my nme is ${user.name} and my role is ${user.role}`);
            

        }else{
            console.log(`my name is ${user.name}`);
            
        }
    }
    const normaluser:Normal={
        name:"santiyago"
    }
    const adminUser:Admin={
        name:"santiyago",
        role:"admin"
    }

    
}
