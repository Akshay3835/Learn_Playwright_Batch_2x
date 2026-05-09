# Rules of Identifiers in JavaScript

| Rule | Description | Valid Example | Invalid Example |
|------|-------------|---------------|-----------------|
| 1 | Must start with a letter, `_` (underscore), or `$` (dollar sign) | `name`, `_count`, `$price` | `1name` (starts with digit) |

| 2 | Can contain letters, digits, `_`, and `$` | `userName1`, `item_2` | `user-name` (hyphen not allowed) |

| 3 | Cannot be a reserved keyword | `let`, `const`, `if` | `let` as variable name |

| 4 | Case-sensitive | `Name` and `name` are different | — |

| 5 | Cannot contain spaces | `firstName` | `first name` |

| 6 | Cannot start with a digit | `result2` | `2result` |

| 7 | Unicode letters are allowed | `café`, `你好` | — |

| 8 | Should be meaningful/descriptive | `userAge`, `totalPrice` | `x`, `a1` (not recommended) |


## Examples for Each Rule

### Rule 1 — Start with a letter, `_`, or `$`

```javascript
let name = "John";       // starts with letter
let _count = 10;         // starts with underscore
let $price = 99.99;      // starts with dollar sign

// let 1name = "John";   // ❌ SyntaxError: Invalid or unexpected token
```

### Rule 2 — Can contain letters, digits, `_`, and `$`

```javascript
let userName1 = "Alice";   // letters + digit
let item_2 = "book";       // underscore + digit
let my$var = 5;            // dollar sign inside

// let user-name = "John"; // ❌ ReferenceError (hyphen is minus operator)
```

### Rule 3 — Cannot be a reserved keyword

```javascript
let myLet = 10;            // ✅ "let" cannot be used, but "myLet" is fine
let myConst = 20;          // ✅

// let let = 5;            // ❌ SyntaxError: Unexpected strict mode reserved word
// let const = 10;         // ❌ SyntaxError
// let if = true;          // ❌ SyntaxError
```

### Rule 4 — Case-sensitive

```javascript
let name = "John";
let Name = "Jane";
let NAME = "Doe";

console.log(name);    // John
console.log(Name);    // Jane
console.log(NAME);    // Doe
// All three are different variables
```

### Rule 5 — Cannot contain spaces

```javascript
let firstName = "John";     // ✅ camelCase is convention

// let first name = "John"; // ❌ SyntaxError: Unexpected identifier
```

### Rule 6 — Cannot start with a digit

```javascript
let result2 = 100;          // ✅ digit at end is fine

// let 2result = 100;       // ❌ SyntaxError: Invalid or unexpected token
```

### Rule 7 — Unicode letters are allowed

```javascript
let café = "coffee";
let 你好 = "hello";
let π = 3.14159;

console.log(café);   // coffee
console.log(你好);   // hello
console.log(π);      // 3.14159
```

### Rule 8 — Use meaningful / descriptive names

```javascript
// ✅ Good — descriptive
let userAge = 25;
let totalPrice = 499.99;
let isLoggedIn = true;
let maxRetryCount = 3;

// ⚠️ Avoid — not descriptive (hard to understand later)
let x = 25;           // what is x?
let a1 = 499.99;      // what does a1 represent?
let foo = true;       // what condition?
```
