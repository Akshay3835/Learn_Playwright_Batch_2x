// ---------- All Number Types in JavaScript ----------

// 1. Integer (decimal)
let intVal = 42;
console.log(intVal);

// 2. Floating point
let float1 = 3.14;
let float2 = 0.5;
let float3 = .25; // leading dot ok
console.log(float1);
console.log(float2);
console.log(float3);

// 3. Scientific / Exponential
let sci1 = 1e3;   // 1000
let sci2 = 2.5e2; // 250
let sci3 = 1e-2;  // 0.01
console.log(sci1);
console.log(sci2);
console.log(sci3);

// 4. Binary (0b / 0B)
let bin1 = 0b1010; // 10
let bin2 = 0B1111; // 15
console.log(bin1);
console.log(bin2);

// 5. Octal (0o / 0O)
let oct1 = 0o77; // 63
let oct2 = 0O10; // 8
console.log(oct1);
console.log(oct2);

// 6. Hexadecimal (0x / 0X)
let hex1 = 0xFF; // 255
let hex2 = 0x1A; // 26
console.log(hex1);
console.log(hex2);

// 7. BigInt (n suffix)
let big1 = 123n;
let big2 = 0xFFn;
let big3 = 9007199254740991n;
console.log(big1);
console.log(big2);
console.log(big3);

// 8. Infinity
let posInf = Infinity;
let negInf = -Infinity;
console.log(posInf);
console.log(negInf);

// 9. NaN (Not a Number)
let notNum = NaN;
console.log(notNum);

// 10. Numeric separators (underscores) – ES2021
let sep1 = 1_000_000;    // 1000000
let sep2 = 0b1010_0001;
console.log(sep1);
console.log(sep2);

// 11. Negative numbers
let neg1 = -7;
let neg2 = -3.14;
console.log(neg1);
console.log(neg2);

// 12. Zero variants
let zero = 0;
let negZero = -0;
console.log(zero);
console.log(negZero);

// typeof all numeric forms
let tNum = 42;
let tFloat = 3.14;
let tHex = 0xFF;
let tBig = 123n;
let tNaN = NaN;
let tInf = Infinity;
console.log(typeof tNum);    // "number"
console.log(typeof tFloat);  // "number"
console.log(typeof tHex);    // "number"
console.log(typeof tBig);    // "bigint"
console.log(typeof tNaN);    // "number"
console.log(typeof tInf);    // "number"
