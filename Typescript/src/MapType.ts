{
    const arrofnumber:number[]=[1,2,3];

    const converttostring:string[]=arrofnumber.map((number)=>number.toString())
    
    console.log(converttostring);
    //analog system mapType
   type ayraNumber={
        height:number,
        weight:number,
    }
    // type areaType={
    //     [key in "height"|"weight"]:string
    // }
    
    //digital system mapType
    type areaTypedynamic={
        [keys in keyof ayraNumber]:string
    }
}