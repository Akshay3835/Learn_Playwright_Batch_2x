const user = {
    name: "John",
    age: 30,
    email: "john2example.com"
};

console.log( user );
console.log( user.age );
console.log( user["email"] );

// Dynamic Property access

const key = "age";
console.log( user[key] );

// Modified
user.city = "BGLR";
user.age = 32;

console.log( user );

