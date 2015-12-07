var fs = require('fs');
var path = require('path');

var ext = process.argv[3];

var callback = function(err, data) {
  if (err) {
    console.log(err.toString());
  }

  data.forEach(function(x, index, array){
    if (path.extname(x) === "."+ext){
      console.log(x);
    }
  });
}

fs.readdir(process.argv[2], callback);
