var sum = 0;

var x = function () {
  for (var i = 2; i < process.argv.length; i++) {
    sum += Number(process.argv[i]);
  }

  return sum;
}

console.log(x().toString());
