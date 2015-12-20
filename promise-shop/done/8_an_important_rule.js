var q = require('q');
var def = q.defer();
var promise = def.promise;

function throwMyGod () {
  throw new Error("OH NOES")
}

function iterate (arg) {
  console.log(arg)
  return ++arg;
}

q.fcall(iterate, 1)
.then(iterate).then(iterate).then(iterate).then(iterate)
.then(throwMyGod)
.then(iterate).then(iterate).then(iterate).then(iterate).then(iterate)
.then(null, console.log)
.done();
