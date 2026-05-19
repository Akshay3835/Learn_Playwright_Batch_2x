console.log('--- typeof operator examples ---');
console.log('');

console.log("typeof 42:", typeof 42);                    // "number"
console.log("typeof 3.14:", typeof 3.14);                // "number"
console.log("typeof 'Hello':", typeof 'Hello');          // "string"
console.log("typeof true:", typeof true);                // "boolean"
console.log("typeof undefined:", typeof undefined);      // "undefined"
console.log("typeof null:", typeof null);                // "object" (known JS quirk)
console.log("typeof 9007199254740991n:", typeof 9007199254740991n); // "bigint"
console.log("typeof Symbol('id'):", typeof Symbol('id')); // "symbol"
console.log("typeof {}:", typeof {});                    // "object"
console.log("typeof []:", typeof []);                    // "object"
console.log("typeof function(){}:", typeof function(){});// "function"
console.log("typeof NaN:", typeof NaN);                  // "number"
console.log("typeof Infinity:", typeof Infinity);        // "number"
