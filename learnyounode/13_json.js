var http = require('http');
var url = require('url');

var server = http.createServer(function(req,res){
  var requestedUrl = url.parse(req.url, true);
  if (requestedUrl.pathname.indexOf('/api/parsetime') > -1){
    var date = new Date(requestedUrl.query.iso);
    var response = JSON.stringify({ hour: date.getHours(),
                                    minute: date.getMinutes(),
                                    second: date.getSeconds() });
    res.write(response.toString());
    res.end();
  }

  if (requestedUrl.pathname.indexOf('/api/unixtime') > -1){
    var date = new Date(requestedUrl.query.iso).getTime();
    res.write(JSON.stringify({ unixtime: date}));
    res.end();
  }

});
server.listen(process.argv[2]);
