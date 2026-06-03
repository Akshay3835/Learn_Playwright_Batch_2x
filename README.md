# Learn Playwright Batch 2x

A hands-on repository for learning Playwright automation with JavaScript fundamentals.

## Structure

| Chapter | Contents |
|---------|----------|
| **Chapter 01 - Basics** | JavaScript basics, logical operators, commands |
| **Chapter 02 - JavaScript Concepts** | JS keywords, identifier rules, naming conventions, identifiers example |
| **Chapter 03 - Identifiers & Literals** | Keywords, identifiers, literals, VS Code shortcuts (Windows) |
| **Chapter 04 - JavaScript Concepts** | `var`/`let`/`const` concepts, function concepts, variable scoping, hoisting concepts, hoisting interview Q&A |
| **Chapter 05 - Literals** | String, number, boolean, null, undefined, backtick/template literals, all number types (binary, octal, hex, BigInt, etc.) |
| **Chapter 06 - Operators** | Arithmetic, modulus, exponentiation, comparison (loose vs strict), logical, string concatenation, ternary, typeof |
| **Chapter 07 - If/Else** | If/else conditions, odd/even check, marks grading, leap year, HTTP status codes, real-world login/role check |
| **Chapter 08 - Switch/Case** | Switch case, fall-through (no break), grouped cases (browser detection), interview questions (fruit match, score grading, duplicate case, strict comparison gotcha) |
| **Chapter 09 - User Input** | `prompt()`, `confirm()`, `Number()` conversion, Node.js `readline`, `prompt-sync` package |
| **Chapter 10 - Loops** | `for` loop, `while` loop, `do-while` loop, `continue`, interview questions (infinite loops, decrementing, conditional breaks), scoping IQ, Task 1 (Triangle classification with `&&`/`||`), Task 2 (FizzBuzz) |
| **Chapter 11 - Arrays** | Array creation (literal, constructor, `Array.of()`, `Array.from()`), accessing elements (`at`, index), adding/removing (`push`, `pop`, `unshift`, `shift`, `splice`), searching (`indexOf`, `lastIndexOf`, `includes`, `find`, `findIndex`, `findLast`, `findLastIndex`), iterations (`for`, `for...of`, `forEach`, `for...in`), transformations (`map`, `filter`, `reduce`, `flat`), sorting (`sort`, numeric compare), slicing (`slice`) |
| **Chapter 12 - Functions** | Basic function, function types (with/without args, with/without return), template literals, function expressions, arrow functions |

## Triangle Classification (If/Else with && and ||)

A JavaScript function that classifies triangles using `if`, `&&` (AND), and `||` (OR):

```javascript
function classifyTriangle(a, b, c) {
  if (a + b > c && a + c > b && b + c > a) {
    if (a === b && b === c) {
      return "Equilateral"; // All 3 sides equal — uses &&
    }
    if (a === b || b === c || a === c) {
      return "Isosceles";   // Any 2 sides equal — uses ||
    }
    return "Scalene";       // No sides equal
  }
  return "Not a valid triangle";
}
```

- **`&&` (AND)**: Used when **every** condition must be true (e.g., all sides equal for Equilateral, or all triangle inequalities must hold).
- **`||` (OR)**: Used when **any one** condition being true is enough (e.g., at least one pair equal for Isosceles).

## Prerequisites

- [Node.js](https://nodejs.org/)
- [VS Code](https://code.visualstudio.com/)

## Getting Started

```bash
# Clone the repo
git clone https://github.com/Akshay3835/Learn_Playwright_Batch_2x.git

# Navigate to project
cd Learn_Playwright_Batch_2x
```
