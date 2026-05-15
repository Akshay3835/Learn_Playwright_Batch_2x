# Hoisting — Interview Questions (var, let, const)

## var hoisting

### Q1: What is the output?

```js
console.log(a); // undefined (hoisted, not initialized)
var a = 5;
console.log(a); // 5
```

### Q2: What is the output?

```js
function varQ2() {
  console.log(b); // undefined
  if (true) {
    var b = 10;
  }
  console.log(b); // 10 (var is function-scoped, not block-scoped)
}
varQ2();
```

---

## let hoisting

### Q3: What is the output?

```js
console.log(c); // ReferenceError: Cannot access 'c' before initialization
let c = 15;
console.log(c); // 15
```

### Q4: What is the output?

```js
function letQ4() {
  let d = 20;
  if (true) {
    let d = 25;
    console.log(d); // 25
  }
  console.log(d); // 20 (block-scoped, shadows outer)
}
letQ4();
```

---

## const hoisting

### Q5: What is the output?

```js
console.log(e); // ReferenceError: Cannot access 'e' before initialization
const e = 30;
console.log(e); // 30
```

### Q6: What happens here?

```js
function constQ6() {
  if (true) {
    const f = 35;
    console.log(f); // 35
  }
  // console.log(f); // ReferenceError: f is not defined (block-scoped)
}
constQ6();
```

---

## Bonus: Common tricky questions

### Q7: var in for loop

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0); // 3, 3, 3 (same binding)
}
```

### Q8: let in for loop

```js
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 0); // 0, 1, 2 (new binding each iteration)
}
```

### Q9: Hoisting order — function vs var

```js
console.log(typeof foo); // function
var foo = "string";
function foo() {
  return "func";
}
console.log(typeof foo); // string
```
