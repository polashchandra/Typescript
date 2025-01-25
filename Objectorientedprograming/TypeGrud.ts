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
    

    
}
