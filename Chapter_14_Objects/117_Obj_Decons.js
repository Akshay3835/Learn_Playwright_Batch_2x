const user = { name: "John", age: 30, city: "Hyderabad" };

//Basic destructuring

// const { name, age } = user;
// console.log(name);
// console.log(age);

// Rename Constructor
const user1 = { name1: UserName, age: Userage } = user;
console.log( UserName );
console.log( Userage );

//deconstructur
const { age } = user;

// DEfault value 
const { country = "India" } = user;
console.log( country );

const data = {
    user: {
        name: "akshay kumar",
        address: {
            city: "Sangareddy"
        }
    }
}

const { user: { address: { city } } } = data;
console.log( user );


