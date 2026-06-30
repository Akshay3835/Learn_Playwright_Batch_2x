// Exercise 2: Constructor with Default Values

class Environment {
    constructor( name = "Staging", port = 3000 ) {
        this.name = name;
        this.port = port;
    }

    getUrl() {
        return "https://" + this.name + ":" + this.port;
    }
}

let env1 = new Environment();
let env2 = new Environment( "production", 8080 );

console.log( env1.getUrl() );
console.log( env2.getUrl() );