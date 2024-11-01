function add(a: number, b:number=10): number{
    return a + b;
}
add(1, 2);

const adds=(a:number,b:number):number=>a + b;

const rich={
    name:"richard",
    balance:0,
    addbalance:(balance:number):string{
        return`balance is: ${this.balance + balance}`
    }
}
const arrays:number[]=[1,4,10]

const newarray: number[]=arrays.map((arr:number):number =>arr*arr)