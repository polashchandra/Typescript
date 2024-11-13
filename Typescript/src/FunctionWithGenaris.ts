//function with genarics
{
    // generic local types
    const crateArray=(param:string):string[]=>{
        return [param]
    }
    // function generics
    const crateArraywithgenaric=<T>(param:T):T[]=>{
        return[param]
    }

    const result =crateArray('hello');
    const result2 =crateArraywithgenaric<boolean>(true)
    type user3 ={ name:string, age:number }
    const result3= crateArraywithgenaric<user3>({name:"hello",age:10})


    //function tuple generics
    const createTuple=<T,Q>(param:T,param1:Q):[T,Q]=>{
        return [param,param1]
    }
    const result4=createTuple<string,number>('hello',10)





    //fixed array generics
    const fixedGemericArray =<T>(student:T)=>{
        const couse="programing hero"
        
        return{
            ...student,couse
        }
    }
    const result5 =fixedGemericArray({name:'hello',age:10})
    
}

