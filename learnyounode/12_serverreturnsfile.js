var http = require('http');
var fs = require('fs');

var callback = function(req, res){
  var src = fs.createReadStream(process.argv[3]);
  src.pipe(res);
};

var server = http.createServer(callback);
server.listen(process.argv[2]);
