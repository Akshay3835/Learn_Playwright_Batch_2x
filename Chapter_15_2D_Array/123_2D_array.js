// Singal Dimension array

let a = [1, 2, 3, 4, 5]

// 2 Dimension Array

let grid = [
    [1, 2, 3],
    [2, 3, 4],
    [4, 5, 6]
];

// print all the elements

for ( let i = 0; i < grid.length; i++ ) {
    for ( let j = 0; j < grid.length; j++ ) {
        console.log( grid[i][j] );
    }
    console.log("\n"); // adding new line
    
}