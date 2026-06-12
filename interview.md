# JS Interview Concepts

## Why use `const` for objects instead of `let` or `var`

`const` prevents the variable from being **reassigned** to a different value. The object itself is still mutable — you can change its properties.

```js
const obj = { a: 1, b: 2 };

obj = { c: 3 };       // ❌ TypeError: Assignment to constant variable
obj.a = 10;           // ✅ Works! Object is mutated
obj.c = 3;            // ✅ Works! New property added
```

With `let`, you can accidentally rebind the variable to a completely different value:

```js
let obj = { a: 1, b: 2 };
obj = { c: 3 };       // ✅ No error — but probably a bug
```

### Why `const` is preferred

1. **Intent signaling** — tells other developers "this variable will always point to the same object"
2. **Prevents accidental reassignment** — avoids hard-to-find bugs where the variable gets rebound
3. **Encourages immutable patterns** — you mutate the object, but never lose the reference

### When to use `let`

Use `let` when you genuinely need to reassign the variable:

```js
let user = getUser(id);
if (!user) {
  user = { id, name: "Guest" };  // reassignment is intentional
}
```

### `var` is legacy

`var` has function scoping (not block scoping) and is hoisted differently. In modern JS, prefer `const` by default, `let` when you need reassignment, and never use `var`.
```
