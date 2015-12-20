var q = require('q');
var def = q.defer();

function logError(err){
  console.log(err.message);
}

def.promise.fail(logError)
// def.promise.then(null, logError)
setTimeout(def.reject, 300, new Error("REJECTED!"))
