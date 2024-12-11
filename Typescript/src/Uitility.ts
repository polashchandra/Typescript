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
}