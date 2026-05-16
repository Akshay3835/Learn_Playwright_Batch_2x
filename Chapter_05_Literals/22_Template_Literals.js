// Template Literals

let firstName = 'Akshay';
let LASTNAME = 'Kumar';

console.log( `Hi ${ firstName } ${ LASTNAME } welcome JavaScript Classes` );


let env = 'staging';
env = 'prod';
const userId = 3456;
const apiUrl = `https://api-${ env }.google.com/users/${ userId }`;
console.log( apiUrl );