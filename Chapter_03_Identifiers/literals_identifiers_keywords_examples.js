# Literals, Identifiers & Keywords — Examples

```javascript
// ===================== KEYWORDS =====================
// Keywords are reserved words with special meaning in JS

// let, const, var — declaration keywords
let userName = "Alice";
const MAX_USERS = 100;

// if, else — control flow keywords
if (userName === "Alice") {
  console.log("Hello Alice");
} else {
  console.log("Hello stranger");
}

// function, return — function keywords
function add(a, b) {
  return a + b;
}

// for, while — loop keywords
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// class, extends, new — OOP keywords
class Animal {}
class Dog extends Animal {}
const pet = new Dog();

// try, catch, throw — error handling keywords
try {
  throw new Error("Oops");
} catch (e) {
  console.log(e.message);
}

// ===================== IDENTIFIERS =====================
// Identifiers are names YOU create for variables, functions, classes, etc.

// Variable identifiers
let firstName = "John";      // firstName is an identifier
let _count = 10;             // _count is an identifier
let $price = 99.99;          // $price is an identifier

// Function identifier
function calculateTotal() {} // calculateTotal is an identifier

// Class identifier
class UserProfile {}          // UserProfile is an identifier

// Parameter identifiers
function greet(name) {        // name is an identifier (parameter)
  console.log("Hi " + name);
}

// Property identifiers
let person = {
  fullName: "John Doe",       // fullName is an identifier (property)
  age: 30
};

// ===================== LITERALS =====================
// Literals are fixed values written directly in source code

// String literals
"Hello World";
'Hello World';
`Hello ${firstName}`;

// Number literals
42;
3.14;
0b1010;  // binary
0xFF;    // hexadecimal

// Boolean literals
true;
false;

// Null / undefined literals
null;
undefined;

// BigInt literal
9007199254740991n;

// Array literal
[1, 2, 3, 4, 5];

// Object literal
{ brand: "Toyota", model: "Camry", year: 2024 };

// Function literal (expression)
const myFunc = function() {
  return "I am a function literal";
};

// Template literal
`The value is ${42}`;

// Regex literal
/ab+c/;
```
