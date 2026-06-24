class HDFC {
    #balance; // # means private in JS, In Typescript - private

    constructor(name, balance) {
        this.#balance = balance;
        this.name = name;
    }

    getBalance() {
        return this.#balance;
    }

    setBalance(balance, isCashier) {
        if (isCashier) {
            this.#balance = balance;
        } else {
            console.log("Not allowed")
        }
    }
}

let ak = new HDFC("Akshay", 1000);
console.log(ak.getBalance());
ak.setBalance(10000000, false);
console.log(ak.getBalance());

let akshay_Father = new HDFC("Pramod", 2000);
console.log(akshay_Father.getBalance());
akshay_Father.setBalance(300000, true);
console.log(akshay_Father.getBalance());