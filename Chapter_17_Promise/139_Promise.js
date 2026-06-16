let order = new Promise( function ( resolve, reject ) {
    let foodReaddy = true;
    if ( foodReaddy ) {
        resolve( " Severing to the table " );

    }
    else {
        reject( " Food is still preparing state" );

    }
} );

console.log( order );
