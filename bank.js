class bank {
    balance = 0;
    constructor(balance){
      this.balance = this.balance + balance;
    }
    // getref() {
        // return this;
    // }
    credit(balance){
        // Guard clause
        if(balance <= 0) return;
    //     if(balance <= 0){
    //         console.log('negative values can not be credited')
    //     }else{
      this.balance = this.balance + balance;
         }
   // }
    debit(balance){
    if(balance <= 0 && balance > this.balance) return;
    this.balance = this.balance - balance;
    }
    getBalance() {
        return this.balance;
    }
    
}
const user1 = new bank(500);
user1.credit(100);
user1.credit(100);
user1.credit(100);
user1.debit(500);
user1.debit(500);

console.log('Your balance is  :' + user1.getBalance())

















// const obj2 = obj1.getref();

// if(obj1 == obj2) {
//     console.log("yes")
// }
// else {
//     console.log("no")
// }