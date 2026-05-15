// =============================================
//  Hoisting Concepts in JavaScript
// =============================================

// ------------------- BASIC -------------------

// 1. var hoisting — declaration is hoisted, not initialization
console.log("1. var hoisting:", myVar); // undefined (no error)
var myVar = 10;
console.log("   After init:", myVar); // 10

// 2. let hoisting — hoisted but in Temporal Dead Zone (TDZ)
// console.log(myLet); // ReferenceError: Cannot access before initialization
let myLet = 20;
console.log("2. let hoisting:", myLet); // 20

// 3. const hoisting — same TDZ behavior as let
// console.log(myConst); // ReferenceError: Cannot access before initialization
const myConst = 30;
console.log("3. const hoisting:", myConst); // 30

// 4. Function declaration hoisting — fully hoisted
console.log("4. Function hoisting:", greet("Alice")); // Hello, Alice!
function greet(name) {
  return `Hello, ${name}!`;
}

// ------------------- INTERMEDIATE -------------------

// 5. Function expression with var — hoisted as undefined
// console.log(sum(2, 3)); // TypeError: sum is not a function
var sum = function (a, b) {
  return a + b;
};
console.log("5. Function expression:", sum(2, 3)); // 5

// 6. Arrow function with var — hoisted as undefined
// console.log(double(4)); // TypeError: double is not a function
var double = (n) => n * 2;
console.log("6. Arrow function:", double(4)); // 8

// 7. Function expression with let/const — TDZ applies
// console.log(multiply(2, 3)); // ReferenceError
let multiply = function (a, b) {
  return a * b;
};
console.log("7. let function expr:", multiply(2, 3)); // 6

// 8. Hoisting order — var declarations rise first, then function declarations
console.log("8. Hoisting order check:", typeof hoistedFunc); // function
var hoistedFunc = "string value";
function hoistedFunc() {
  return "I am a function";
}
console.log("   After var assignment:", typeof hoistedFunc); // string (var overwrites)

// 9. Block-scoped vs function-scoped hoisting
if (true) {
  // console.log(blockVar); // ReferenceError if accessed before let/const
  let blockVar = "I am block-scoped";
  var functionVar = "I am function-scoped";
}
console.log("9. var escapes block:", functionVar); // I am function-scoped
// console.log(blockVar); // ReferenceError: blockVar is not defined

// 10. Practical pattern — using function hoisting for readable code
const result1 = calculate(5, 3, "add");
const result2 = calculate(10, 4, "subtract");
console.log("10a. calculate add:", result1); // 8
console.log("10b. calculate subtract:", result2); // 6

function calculate(a, b, operation) {
  switch (operation) {
    case "add":
      return add(a, b);
    case "subtract":
      return subtract(a, b);
    default:
      return 0;
  }
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}
