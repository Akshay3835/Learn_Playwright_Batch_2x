const BASE_URL = "https://app.thetestingacademy.com/";

//BASE_URL = "https://google.com"; // cannot change the const value (reassigning)

//const BASE_URL = "hhtps://google.com"; // redecalration is not allowed here

// const must be initialized
// const NAME; // SyntaxError: Missing initializer in const declaration

// const is block-scoped
{
  const BLOCK_SCOPED = "I am inside a block";
  console.log(BLOCK_SCOPED);
}
// console.log(BLOCK_SCOPED); // ReferenceError: BLOCK_SCOPED is not defined

// const with objects — properties CAN be mutated
const USER = { name: "John", age: 30 };
USER.name = "Jane";
USER.age = 25;
USER.country = "India";
console.log(USER); // { name: 'Jane', age: 25, country: 'India' }
// USER = {}; // TypeError: Assignment to constant variable

// const with arrays — elements CAN be mutated
const COLORS = ["red", "green", "blue"];
COLORS.push("yellow");
COLORS[0] = "orange";
console.log(COLORS); // ['orange', 'green', 'blue', 'yellow']
// COLORS = []; // TypeError: Assignment to constant variable

// const with different data types
const PI = 3.14159;
const IS_ACTIVE = true;
const GREETING = "Hello World";
const NULL_VALUE = null;
const SYM = Symbol("id");
console.log(PI, IS_ACTIVE, GREETING, NULL_VALUE, SYM);

// const in loops — use let for loop variable, const for fixed values
const MAX_RETRIES = 3;
for (let i = 0; i < MAX_RETRIES; i++) {
  console.log(`Attempt ${i + 1}`);
}

