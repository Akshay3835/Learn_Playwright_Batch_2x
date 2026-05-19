// Loose comparison (==) - converts types before comparing
console.log("Comparing values with loose (==) and strict (===) operators:");
console.log("");

console.log("5 == '5':", 5 == '5');        // true (string '5' converted to number)
console.log("5 === '5':", 5 === '5');      // false (number vs string)

console.log("0 == false:", 0 == false);    // true (false converted to 0)
console.log("0 === false:", 0 === false);  // false (number vs boolean)

console.log("null == undefined:", null == undefined);   // true (special rule)
console.log("null === undefined:", null === undefined); // false (different types)

console.log("'' == 0:", '' == 0);          // true (empty string converted to 0)
console.log("'' === 0:", '' === 0);        // false (string vs number)

console.log("'true' == true:", 'true' == true);   // false (NaN vs 1)
console.log("'true' === true:", 'true' === true); // false (string vs boolean)

console.log("32 == 35:", 32 == 35);
console.log("32 === 32:", 32 === 32);

console.log("");
console.log("--- Loose not-equal (!=) vs Strict not-equal (!==) ---");
console.log("");

console.log("5 != '5':", 5 != '5');        // false (coerces, then 5==5 → false)
console.log("5 !== '5':", 5 !== '5');      // true  (different types)

console.log("10 != '10':", 10 != '10');    // false (coerces, then equal)
console.log("10 !== '10':", 10 !== '10');  // true  (number vs string)

console.log("null != undefined:", null != undefined);   // false (loose says equal)
console.log("null !== undefined:", null !== undefined); // true  (different types)

console.log("");
console.log("Note: '!==' is NOT a valid JavaScript operator.");
console.log("Use '!==' for strict not-equal and '!=' for loose not-equal.");

