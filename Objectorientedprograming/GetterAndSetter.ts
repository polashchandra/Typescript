{
    // getter and setter

    class BankAccount{
     public readonly id:number;
     public name:string;
     protected _balance:number;
     
     constructor(id:number,name:string,balance:number){
        this.id=id;
        this.name=name;
        this._balance=balance;
     }
     // Setter
     set balance(amount:number){
        this._balance = this._balance + amount;
     }

    // Getter
     get balance(){
        return this._balance;
     }


    }
    const goribmanusherAccount= new BankAccount(111,'goribmanush',1000); 

    goribmanusherAccount.balance=500;

    const myBalance=goribmanusherAccount.balance;
 
}