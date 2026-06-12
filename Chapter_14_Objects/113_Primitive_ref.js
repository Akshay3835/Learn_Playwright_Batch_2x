// Prmitive vs Refernence Type

let a = 10;
let b = a;
b = 99;
console.log( a );

// Object - copied by reference, call by ref
// Reference - object, array - function

let obj1 = { value: 10 };
let obj2 = obj1;
obj2.value = 99;
console.log( obj1.value );

