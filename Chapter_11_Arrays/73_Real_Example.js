let browser = ["Chrome", "FireFox", "Safari", "Opera", "Edge"];
console.log( "Browser lenght is : ", browser.length );
console.log( browser );

browser.pop();
console.log( browser );

let removed = browser.shift();
console.log( browser );
console.log( removed );

let added = browser.unshift( "Chrome" );
console.log( browser );
console.log( added );

for ( let i = 0; i < browser.length; i++ ) {
    console.log( browser[i] );
    if ( browser[i] === "Opera" ) {
        console.log( " Opera is removed from the selenium" );
    }
}