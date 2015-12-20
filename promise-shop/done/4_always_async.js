// 1. Create a promise using the "Q" library
// 2. Pass console.log to the "then" method of our promise
// *3. Resolve the promise with a parameter "SECOND"
// 4. Print "FIRST" to the console using console.log
//
// *Do this synchronsouly and NOT in a setTimeout as was the case in previous lessons
//
// Your script will pass and show you that despite the promise being resolved synchronously,
// the provided function is not executed until the next turn of the event loop.
//
// Thus, you should see "FIRST", "SECOND"

var q = require('q');
var defer = q.defer();

defer.promise.then(console.log);
defer.resolve("SECOND");
console.log("FIRST")
