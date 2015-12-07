var http = require('http');
var concat = require('concat-stream')
var url = process.argv[2];

http.get(url, function(response){
  response.pipe(concat(function(data){
    console.log(data.toString().length)
    console.log(data.toString());
  }));
})
