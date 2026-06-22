class TestCase {
    constructor( name, status, priority ) {
        this.name = name;
        this.status = status;
        this.priority = priority;
    }

    display() { // Method 
        console.log( this.name + "->" + this.status + "->" + this.priority );

    }
}

// Function 
function fi() {

}

let LoginTC = new TestCase( "Login Test", "Pass", "P0" );
let Signup = new TestCase( "SignUp", " Fail", " P0" );

LoginTC.display();
Signup.display();