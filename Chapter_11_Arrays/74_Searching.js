let results = ["Pass", "Fail", "Pass", "Error", "Fail"];

// {indexof} return first index or -1 if not found
results.indexOf( "Fail" );
results.indexOf( "Pass" );

// {LastIndexOf} - searches from the end

results.lastIndexOf( "Fail" );


// {inculdes} - rteurs boolean

results.includes( "Error" );
results.includes( "Fail" );

//{find} - retruns first matching elements
let nums = [10, 30, 40, 50, 60];
nums.find( x => x > 20 );

nums.findIndex( n => n > 20 );

nums.findLast( n => n > 20 );

nums.findLastIndex( n => n > 20 );