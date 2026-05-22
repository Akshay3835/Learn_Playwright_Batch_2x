let attempt = 0;
while ( attempt < 3 ) {
    console.log( attempt );
    attempt++
} 

console.log("--- Example 2: Count down ---");
let count = 5;
while (count > 0) {
    console.log(count);
    count--;
}

console.log("--- Example 3: Even numbers ---");
let num = 2;
while (num <= 10) {
    console.log(num);
    num += 2;
}

console.log("--- Example 4: Sum numbers ---");
let sum = 0;
let i = 1;
while (i <= 5) {
    sum += i;
    console.log(`i=${i}, sum=${sum}`);
    i++;
}