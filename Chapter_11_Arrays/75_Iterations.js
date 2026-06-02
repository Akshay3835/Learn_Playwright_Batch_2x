let tests = [" Login", " checkout", " Search"];

for ( let i = 0; i <= tests.length; i++ ) {
    console.log( tests[i] );
}

console.log( "-------------" )

//  for ...of (cleanest for values)
for ( test of tests ) {
    console.log( test );
}

console.log( "-------" )

// for each

tests.forEach( ( i, index ) => {
    console.log( i, index );
} );

// for... in 
let students = ["Akshay", "Abhi", "Srinija", "Cnu"];

for ( student in students ) {
    console.log( students, '->', students[student] ); // nsdex in
}