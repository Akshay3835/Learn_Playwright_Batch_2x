# Learn Playwright Batch 2x

> A hands-on repository for learning Playwright automation with JavaScript fundamentals.

---

## 📂 Chapter Overview

| # | Chapter | Topics Covered |
|---|---------|---------------|
| 01 | **Basics** | JavaScript basics, logical operators, commands |
| 02 | **JavaScript Concepts** | JS keywords, identifier rules, naming conventions |
| 03 | **Identifiers & Literals** | Keywords, identifiers, literals, VS Code shortcuts |
| 04 | **JavaScript Concepts** | `var` / `let` / `const`, function concepts, scoping, hoisting |
| 05 | **Literals** | String, number, boolean, null, undefined, template literals, binary, octal, hex, BigInt |
| 06 | **Operators** | Arithmetic, modulus, exponentiation, comparison, logical, ternary, typeof |
| 07 | **If/Else** | Conditions, odd/even, grading, leap year, HTTP status, real-world login/role |
| 08 | **Switch/Case** | Fall-through, grouped cases, interview Q&A |
| 09 | **User Input** | `prompt()`, `confirm()`, `Number()`, Node.js `readline`, `prompt-sync` |
| 10 | **Loops** | `for`, `while`, `do-while`, `continue`, interview Q&A, Triangle Classification, FizzBuzz |
| 11 | **Arrays** | Creation, access, CRUD, search, iteration, `map`/`filter`/`reduce`/`flat`, sort, slice |
| 12 | **Functions** | Function types, arrow functions, IIFE, params/spread, scope, closures, HOF, pure functions, interview Q&A |
| 13 | **Strings** | Properties, search, substring, transformation, type conversion, cheat sheet |
| 14 | **Objects** | Creation, properties, real-world objects, `const` vs `let` for objects |
| 15 | **2D Array** | 2D arrays, array methods, interview Q&A, real-world examples |
| 16 | **Callbacks** | Sync/async callbacks, Playwright callbacks, callback hell (pyramid of doom), E2E flow simulation |
| 17 | **Promises** | Promise creation, resolve/reject, real-world API examples, finally block, callback problem, Promise.all, interview Q&A |
| 18 | **Async & Await** | Async functions, Promise-based DOM, parallel/sequential execution, interview Q&A, Playwright login test |

---

## 🧠 Featured Concept

### Triangle Classification with `&&` and `||`

```javascript
function classifyTriangle(a, b, c) {
  if (a + b > c && a + c > b && b + c > a) {
    if (a === b && b === c) return "Equilateral";
    if (a === b || b === c || a === c) return "Isosceles";
    return "Scalene";
  }
  return "Not a valid triangle";
}
```

| Operator | Role |
|----------|------|
| `&&` (AND) | All conditions must be true |
| `||` (OR)  | At least one condition must be true |

---

## 🛠 Prerequisites

- [Node.js](https://nodejs.org/)
- [VS Code](https://code.visualstudio.com/)

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/Akshay3835/Learn_Playwright_Batch_2x.git

# Navigate to project
cd Learn_Playwright_Batch_2x

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install

# Run Playwright tests
npx playwright test
```

## 🤖 CI/CD

This repo uses [GitHub Actions](.github/workflows/playwright.yml) to run Playwright tests on every push to the `master` branch. Tests run across Chromium, Firefox, and WebKit.
