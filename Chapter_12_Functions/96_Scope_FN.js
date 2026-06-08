// Scope in Function

let env = "Stagging";

function setupConfig() {
    let timeout = 1000;
    console.log( env );
    console.log( timeout );
}

setupConfig();
console.log( env );
console.log( timeout );