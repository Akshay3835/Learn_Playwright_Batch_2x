// =============================================
//  Let Hoisting — Function Context Examples
// =============================================

// Example 1: let inside function — TDZ applies
function demoLetTDZ() {
  // console.log(x); // ReferenceError: Cannot access 'x' before initialization
  let x = 10;
  console.log("1. let after init inside function:", x); // 10
}
demoLetTDZ();

// Example 2: let with typeof inside function (TDZ still applies)
function demoLetTypeof() {
  // console.log(typeof y); // ReferenceError
  let y = 20;
  console.log("2. typeof after init:", typeof y); // "number"
}
demoLetTypeof();

// Example 3: let in loop inside function — separate binding per iteration
function demoLetLoop() {
  for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log("3. let loop in function:", i), 0); // 0, 1, 2
  }
}
demoLetLoop();

// Example 4: let shadowing in nested function
let msg = "global";
function outer() {
  let msg = "outer";
  function inner() {
    let msg = "inner";
    console.log("4a. inner msg:", msg); // inner
  }
  inner();
  console.log("4b. outer msg:", msg); // outer
}
outer();
console.log("4c. global msg:", msg); // global

// Example 5: let in block inside function — block scoped
function demoBlockScope() {
  if (true) {
    let blockScoped = "I live only in this block";
    console.log("5a. inside block:", blockScoped);
  }
  // console.log(blockScoped); // ReferenceError
  console.log("5b. outside block — cannot access blockScoped");
}
demoBlockScope();

