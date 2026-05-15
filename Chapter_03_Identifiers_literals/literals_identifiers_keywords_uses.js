// =============================================
//  Literals, Identifiers & Keywords in JavaScript
// =============================================

// ------------------- KEYWORDS -------------------
// Reserved words with special meaning in the language —
// used to define syntax, control flow, declarations, etc.
// Examples: let, const, if, else, for, while, function, return, class, import

let keywordVar = "declared with let";
const keywordConst = "declared with const";

function keywordFunction() {
  if (true) {
    return "if/else/return keywords";
  }
}

for (let i = 0; i < 1; i++) { /* for keyword */ }
while (false) { /* while keyword */ }

// ------------------- IDENTIFIERS -------------------
// Names given to variables, functions, classes, or properties
// to reference them in code

let myVariable = "user-defined identifier";
function calculateTotal() { /* function identifier */ }
class UserProfile { /* class identifier */ }
const person = {
  firstName: "property identifier"
};

// ------------------- LITERALS -------------------
// Fixed values written directly in source code — represent data
// without needing a variable

// String literals
"Hello"; 'World'; `Template literal`;

// Number literals
42; 3.14; 0xFF;

// Boolean literals
true; false;

// Null / undefined
null; undefined;

// Array literal
[1, 2, 3];

// Object literal
{ name: "John" };

// ------------------- SUMMARY -------------------
// Keywords  → tell JavaScript what to do (language commands)
// Identifiers → let you name things to refer to them later
// Literals   → the actual data values you write in code
