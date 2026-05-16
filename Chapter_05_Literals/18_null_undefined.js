// ------------------- null vs undefined -------------------

// undefined = variable declared but value not assigned
// null = intentional empty value

// 1. undefined
let a;
console.log(a); // undefined

function greet(name) {
  console.log(name); // undefined if not passed
}
greet();

const obj = { x: 10 };
console.log(obj.y); // undefined

// 2. null
let b = null;
console.log(b); // null

const user = { name: "Alice", address: null }; // no address yet
console.log(user.address); // null

// 3. Key differences
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object" (historical bug)

// Loose vs strict equality
console.log(null == undefined);  // true  (loose)
console.log(null === undefined); // false (strict)

// 4. Common use cases
// undefined -> JS gives you this, don't assign it manually
// null -> use when you want to say "empty / nothing" intentionally
