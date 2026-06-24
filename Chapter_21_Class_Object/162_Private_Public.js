// Private Fields (#) - Hidden Data
// Public Fields

class Credentials {
    #apikey; // private variables are not allowed to be used outside.
    user;

    constructor( user, key ) {
        this.user = user; // Public fields
        //this.#apikey = key;
    }

    // Custom made function by us

    akshaygetAuthHeader(){
        return "Bearer " + this.#apikey;

    }
}

let cred = new Credentials("admin", "scret_key_1234");
console.log(cred.user);
// console.log(cred.apiKey); undefined
// console.log(cred.#apiKey); //error

const token = cred.pramodgetAuthHeader();
console.log(token);
