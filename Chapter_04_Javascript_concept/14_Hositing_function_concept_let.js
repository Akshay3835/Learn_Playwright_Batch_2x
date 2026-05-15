console.log( score ); //ReferenceError: Cannot access 'score' before initialization
let score = 100;

{


    let score = 1200;
    console.log( score );
}