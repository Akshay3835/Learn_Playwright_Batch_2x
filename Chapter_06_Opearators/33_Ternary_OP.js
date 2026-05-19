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