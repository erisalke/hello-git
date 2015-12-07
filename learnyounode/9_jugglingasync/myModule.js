module.exports =
function(url, callback) {
  var http = require('http');
  var bl = require('bl'); //bufferlist

  http.get(url, function(response){
    response.pipe(bl(function(err, data){
      if (err) {
        return callback(err);
      }
      callback(null, data.toString());
    }));
  });
}
