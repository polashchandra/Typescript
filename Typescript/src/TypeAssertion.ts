{
    //type assertuon
    let anything : any;

    anything="next level web development"; //"

    const kgtogm=(value:string | number):string|number|undefined=>{
        if(typeof value==='string'){
            const converdvalue=parseFloat(value)*1000;
            return `the converted value is ${converdvalue}` //converts string to float and returns it.
        }
        if(typeof value==='number'){
            return  value*1000
        } //checks if the variable type is a number, then
    };
    const result1=kgtogm(100)as number;
    const result=kgtogm(1)
    
    type  customer={
        message:string
    }
    
    try{

    }catch(error){
        console.log((error as customer).message);
    }
}