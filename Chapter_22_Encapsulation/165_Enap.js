class BankAccount {
    #balance = 0; // private feild hidden from outside 

    deposit( amount ) {
        if ( amount > 0 ) {
            this.#balance += amount;
        }

    }

    getBalance() {
        return this.#balance;
    }

}

const account = new BankAccount();

account.deposit( 100 );
console.log( account.getBalance() );

account.deposit( 2000 );
console.log( account.getBalance() );

