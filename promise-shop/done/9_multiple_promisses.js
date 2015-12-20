var q = require('q');
var def1 = q.defer();
var def2 = q.defer();

function all(promise1, promise2) {
  var def = q.defer();
  var counter = 0;
  var result = []

  function iterateAndFullfil(res) {
    result[counter++] = res
    if (counter == 2){
      def.resolve(result)
    }
  }

  function rejectTheInternal() {
    def.reject()
  }

  promise1.then(iterateAndFullfil).then(null, rejectTheInternal)
  promise2.then(iterateAndFullfil).then(null, rejectTheInternal)

  return def.promise;
}

all(def1.promise, def2.promise).then(console.log)

setTimeout(function(arr){
  def1.resolve(arr[0])
  def2.resolve(arr[1])
}, 200, ["PROMISES","FTW"]);
