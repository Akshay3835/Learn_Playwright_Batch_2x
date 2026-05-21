// Question 4 - Build Health Reporter

let buildStatus = 95;

if ( buildStatus === 100 ) {
    console.log( buildStatus, "🟢 Green Build " );
}
else if ( buildStatus >= 90 && buildStatus <= 99 ) {
    console.log( buildStatus, " 🟡 Stable — Investigate failures" );
}
else if ( buildStatus >= 70 && buildStatus <= 89 ) {
    console.log( buildStatus, " 🟠 unstable - Investigate failures" );
}
else {
    console.log( buildStatus, " 🔴 Broken Build — Block deployment" );
}

buildStatus = 65;

if ( buildStatus === 100 ) {
    console.log( buildStatus, "🟢 Green Build " );
}
else if ( buildStatus >= 90 && buildStatus <= 99 ) {
    console.log( buildStatus, " 🟡 Stable — Investigate failures" );
}
else if ( buildStatus >= 70 && buildStatus <= 89 ) {
    console.log( buildStatus, " 🟠 unstable - Investigate failures" );
}
else {
    console.log( buildStatus, " 🔴 Broken Build — Block deployment" );
}