var HTTP = require("q-io/http");
var JSON = require('json');

// HTTP.read("http://localhost:1337").then(function(buffer){
//   var res = buffer.toString();
//   console.log(res)
//   var res2 = JSON.stringify(res);
//   console.log(res2)
// })

HTTP.read("http://localhost:1337")
.then(function(buffer){ return buffer.toString() })
.then(function(res){ console.log(JSON.stringify(res)) })
  // var res2 = JSON.stringify(res);
  // console.log(res2)
