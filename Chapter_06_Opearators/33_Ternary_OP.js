let akshay_age = 18;
let ak_will_go_goa = akshay_age > 18 ? "AK will Go" : " Not Go";
console.log( ak_will_go_goa );

let ak_age = 28;
let akshay_will_go_goa = ak_age > 18 ? "AK will Go" : " Not Go";
console.log( akshay_will_go_goa );

let actualStatusCode = 200;
let expectedStatusCode = 200;
let resultCode = actualStatusCode === expectedStatusCode ? "Pass" : "Fail";
console.log( resultCode );

let environment = 'stagging';
let baseUrl = environment === "prod" ? "https://api.example.com" : "https://stagging-api.example.com";
console.log( baseUrl );

let responseTime = 850;
let sla = 1000;
let slaStatus = responseTime <= sla ? "with in sla" : "sla Breached";
console.log( 'Response : ${responseTime}ms - ${slaStatus}' );

console.log( "" );
console.log( "--- Nested Ternary Examples ---" );

let score = 85;
let grade = score >= 90 ? "A" : score >= 75 ? "B" : "C";
console.log( "Score:", score, "-> Grade:", grade );

let num = 0;
let result = num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
console.log( "Number:", num, "->", result );


let akshay_Age = 42;
let he_can_vote = akshay_Age > 18 ? ( akshay_Age >= 18 ? "he_can_vote" : "No he cant vote" ) : "No";
console.log( he_can_vote );

let nums = 0;
let results = nums > 0 ? "positive" : nums < 0 ? "Negative" : "Zero";
console.log( " Number:", nums, "->", results );