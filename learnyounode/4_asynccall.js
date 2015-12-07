var fs = require('fs');
var err, data;

var callback = function(err, data){
  if (err){
    return err.toString();
  }

  var result = data.toString().split('\n').length - 1;
  console.log(result);
}

fs.readFile(process.argv[2], callback);
