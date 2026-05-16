// ---------- Backtick vs Single vs Double Quotes ----------

// Single and Double are identical — no special features
// Use single by convention, double when string contains single quotes
let single = 'Hello';
let double = "Hello";
console.log(single, double);

// Backtick (Template Literal) supports:

// 1. String interpolation ${} — embed any expression
let name = "Alice";
let msg = `Hi ${name}`;          // variable
let expr = `2 + 2 = ${2 + 2}`;  // expression
console.log(msg);
console.log(expr);

// 2. Multi-line strings (no \n needed)
let multi = `Line 1
Line 2
Line 3`;
console.log(multi);

// 3. Tagged templates — advanced: custom function processes template
function tag(strings, ...vals) {
  return strings[0] + vals[0] + strings[1];
}
let tagged = tag`Hello ${"World"}!`;
console.log(tagged);

// 4. Escaping quotes — backtick allows " and ' freely inside
let useSingle = "It's nice";
let useDouble = 'He said "hello"';
let useBacktick = `She said "it's nice"`;  // no escaping needed
console.log(useSingle, useDouble, useBacktick);

// 5. Performance — all three are similar, no real difference
