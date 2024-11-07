{
    type GenericArray<T> =Array<T>;

    const rolNumber : GenericArray<number> = [1,2,3,4];

    const mentors : GenericArray<string> = ["John", "Jane"];

    const boolArray:GenericArray<boolean> = [true, false, true] ;

    interface user {
        name : string ;
        age:number ;
    }

    const user : GenericArray<user> = [{ name : "John" , age : 25 }];

    const add =(a : number , b : number) => a + b ;

    add(30,40)

    type GenericTuple<x,y> = [x, y] ;

    const manush:GenericTuple<string,string> =['mr.x','ms.y']

    const UserWithID: GenericTuple<number, { name: string; email: string }> = [
        1234,
        { name: "persian", email: "a@gmail.com" },
      ];
}