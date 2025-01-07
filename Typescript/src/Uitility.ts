{
    // utlities typee
    type utilities = { 
        name:string;
        age:number;
        email?:string;
        contactNo:string;
    };
// Pick
    type nameage=Pick<utilities,"name"|"age">;


//omit

 type contactInfo = Omit<utilities,"name"|"age">
 //required
 type  requiredUtility = Required<utilities>

 //partial
 type personpartial=Partial<utilities>  

 // Readonly
 type utlityReadonly = Readonly<utilities>;
 //Record
 type myobj=Record<string,unknown>

}