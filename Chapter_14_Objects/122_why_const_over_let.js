// Why use const for objects instead of let

// Example 1: Accidental reassignment
let config = { theme: "dark", lang: "en" };

function loadConfig() {
    config = { theme: "light", lang: "fr" }; // oops — rebinds the variable
}

loadConfig();
console.log(config); // { theme: "light", lang: "fr" } — original object lost

// With const this would throw an error, catching the bug early.

// Example 2: Variable shadowing bugs
let user = { name: "Alice", age: 25 };

if (true) {
    let user = { name: "Bob", age: 30 }; // creates a NEW variable, doesn't mutate
    user.age = 31;
}

console.log(user); // { name: "Alice", age: 25 } — outer object unchanged
// Developer likely expected to mutate the original user object.

// Example 3: Accidental nulling across scopes
let cache = { data: "important" };

function resetCache() {
    cache = null; // ⚠️ allowed with let, breaks any later code using cache
}

resetCache();
// console.log(cache.data); // TypeError: Cannot read properties of null

// With const: cache = null would throw an error, preventing the mistake.

// Rule: Use const by default. Only use let when you MUST reassign the variable.
