{
    class BankAccount{
     public readonly id:number;
     public name:string;
     protected _balance:number;
     
     constructor(id:number,name:string,balance:number){
        this.id=id;
        this.name=name;
        this._balance=balance;
     }
     public Adddeposit(amount:number){
        this._balance=this._balance+amount;
     }
     public getBalance(){
        return this._balance;
     }

    }
    class studentAccount extends BankAccount{
        test(){
            this._balance
        }
    }

    const goribmanusherAccount= new BankAccount(111,'goribmanush',1000);
    goribmanusherAccount.Adddeposit(500);
    
    const mybalance=goribmanusherAccount.getBalance();
    console.log(mybalance);
}