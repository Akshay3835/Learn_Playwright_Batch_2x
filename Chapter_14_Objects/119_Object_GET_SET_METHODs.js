const user = {
    firstName: "Akshay",
    latName: "Kumar",
    get fullName() {
        return this.firstName + this.latName;
    },
    set fullName( value ) {
        [this.firstName, this.latName] = value.split( " " );
    }
}

console.log( user.fullName );
user.fullName = "Abhiram kumar";
console.log( user.fullName );



