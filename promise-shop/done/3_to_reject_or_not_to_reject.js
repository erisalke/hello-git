var q = require('q');
var def = q.defer();

def.promise.then(console.log, console.log)

def.resolve("I FIRED")
def.reject("i dont")
