class Person {
    //Attriubutes

    name = "Akshay";
    email;
    Salary;
    address;

    //Behaviour
    sleep() {
        console.log( member.name + " is sleeping" );

    };
    eat() {
        console.log( member.name + " is eating" );
    };
    walk() {
        console.log( member.name + " is walking" );
    }
}

let member = new Person();

member.name = "Akshay";
member.email = "AKshay@gmail.com";
member.Salary = "$1,00,000";
member.address = "Hyderabad";
member.sleep();
member.eat();
member.walk();

console.log( member );

