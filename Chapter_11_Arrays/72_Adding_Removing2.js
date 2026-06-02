let arr = [1, 2, 3];
arr.push( 4, 5, 6 );
console.log( arr );

//splice (start, deletecount, ...itemsToAdd)

// arr.splice( 2, 1 );
// console.log( arr );

// arr.splice( 1, 3 );
// console.log( arr );

// arr.splice( 0, 4 ); // Empty array deleted all items
// console.log( arr );

arr.splice( 2, 0, 99 ); // adds the value
console.log( arr );

arr.splice( 2, 1, 99 ); // removes the value
console.log( arr );

arr.splice( 1, 2, 10, 20 );
console.log( arr );
