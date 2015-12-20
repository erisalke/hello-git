// Let's build exactly the system discussed above.
// Some invalid JSON will be available on process.argv[2];
//
// 1. Build a function called parsePromised that creates a promise,
//    performs JSON.parse in a try/catch block, and resolves or rejects
//    the promise depending on whether an error is thrown.
//    **NOTE** your function should synchronously return the promise!
// 2. Build a sequence of steps like the ones shown above that catches
//    any thrown errors and logs them to the console.

var q = require('q');

function parsePromised (json) {
  var def = q.defer();
  var promise = def.promise;

  try {
    def.resolve(JSON.parse(json))
  } catch(e) {
    def.reject(e)
  }

  return promise
}

parsePromised(process.argv[2]).then(null,console.log)
