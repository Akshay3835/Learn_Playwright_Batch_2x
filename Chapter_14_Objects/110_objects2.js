// objects - Key Value pair

// let student = {
//     name: "akshay",
//     age: 29,

// };

// let student2 = { name: "Akshey Kumar" };

// let student3 = {
//     name: "Akshay",
//     age: 28,
//     phone: "567389290"
// };

// console.log( student );
// console.log( student2 );
// console.log( student3 );


// // key will not be in the double quotes
// // below key in double qutoes is JSON which used in api response

// let JSON_student = {
//     "name ": "Akshay kumar",
//     "age ": " 39",
//     "phone": "8776554322"
// }


let a = { status: "Pass" };
console.log( a.status );
console.log( a["status"] );

console.log( "______________" );


let b = a;
b.status = "Fail";
console.log( a.status );
console.log( b["status"] );


