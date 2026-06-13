//n =3a
//*
//**
// *** 

let n = 3;

for ( let i = 1; i <= n; i++ ) {
    row = "";
    for ( let j = 1; j <= i; j++ ) {
        row = row + "*";
    }
    console.log( row.trim() );

}