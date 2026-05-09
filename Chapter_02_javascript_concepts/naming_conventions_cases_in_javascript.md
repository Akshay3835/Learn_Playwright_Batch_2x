# Naming Conventions / Cases in JavaScript

| Case | Example | Description | Usage in JS |
|------|---------|-------------|-------------|
| **camelCase** | `firstName`, `userAge` | First word lowercase, subsequent words capitalized | Variables, functions, properties (standard JS convention) |
| **PascalCase** | `FirstName`, `UserAge` | Every word starts with uppercase | Classes, constructors, React components |
| **snake_case** | `first_name`, `user_age` | Words separated by underscores | Rare in JS; sometimes used in constants or databases |
| **SCREAMING_SNAKE_CASE** | `MAX_RETRY_COUNT`, `API_KEY` | All uppercase with underscores | Constants whose value never changes |
| **kebab-case** | `first-name`, `user-age` | Words separated by hyphens | Not allowed in JS variables; used in file names, CSS classes, HTML attributes |
| **Hungarian Notation** | `strName`, `intCount` | Prefix indicates data type | Deprecated / not recommended in modern JS |

## Examples

```javascript
// camelCase  ✅ (variables & functions)
let firstName = "John";
let userAge = 25;
function getUserData() {}

// PascalCase ✅ (classes)
class UserProfile {}
class ShoppingCart {}

// snake_case  ⚠️ (rare in JS)
let first_name = "John";

// SCREAMING_SNAKE_CASE ✅ (true constants)
const MAX_RETRY_COUNT = 3;
const API_BASE_URL = "https://api.example.com";

// kebab-case ❌ (NOT allowed in JS identifiers)
// let first-name = "John";  // SyntaxError

// Hungarian Notation ❌ (outdated)
// let strName = "John";     // not recommended
// let intCount = 5;         // not recommended
```
