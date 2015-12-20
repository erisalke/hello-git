var q = require('q');
var defer = q.defer();

var x = defer.then(console.log("asdf"));
setTimeout(x(), 300)

//
// var q = require('q');
// var def = q.defer();
//
// def.promise.then(console.log);
// setTimeout(def.resolve, 300, "RESOLVED!");



// var deferred = Q.defer();
// FS.readFile("foo.txt", "utf-8", function (error, text) {
//     if (error) {
//         deferred.reject(new Error(error));
//     } else {
//         deferred.resolve(text);
//     }
// });
// return deferred.promise;
