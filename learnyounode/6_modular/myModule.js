module.exports =

function(dirName, fileExt, callback) {
  var fs = require('fs');
  var path = require('path');
  fs.readdir(dirName, function(err, data){
    if (err) {
      callback(err);
    }
    else { //or return callback(err) works the same
      var result = [];
      data.forEach(function(x){
        if (path.extname(x) === "." + fileExt)
          result.push(x);
      });
      callback(null, result);
    }
  });
}
