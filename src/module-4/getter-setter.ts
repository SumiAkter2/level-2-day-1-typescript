class BandAccount{
 public readonly id: number;
 public name: string;
 private _balance: number;

    constructor(id: number,
    name: string,
        balance: number) {
        this.id = id;
        this.name = name;
        this._balance = balance;
    }
    // getter:

    get balance(): number{
        return this._balance;
    }
    // setter:
    set deposite(amount: number) {
        this._balance=this._balance+amount
    }
    // getBalance() {
    //     console.log(this._balance);
    // }
    getDeposite(amount:number) {
        this._balance=this._balance+amount
    }
   
  
}

const myAccount = new BandAccount(1, 'sumi', 99000000)
// myAccount.id = 0;
console.log(myAccount.balance);
// myAccount.deposite = 1000000;
// myAccount.getDeposite(90)
console.log(myAccount.balance);