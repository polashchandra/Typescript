//primitive dataType
const number :number=1

const  string :string="hello world"

const bollen :boolean = true;


const nulls :null = null;

const undefineds :undefined = undefined;
// non primitive dataType
const array :[number] = [12];
const arrayRool:[string, boolean, number]=["hello",true,123]

const user:{
    readonly company:string, //type--literal types
    companys:'programing Hero'
    firstName : string,
    middleName? : string,// optional type
    lastName : string
    ismarried : boolean
}={
    firstName:"john",
     lastName : "doe" , 
     ismarried : true
}
user.company="next level development";