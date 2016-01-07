var HTTP = require("q-io/http");


// HTTP.read("http://localhost:1337").then(function(buffer){
//   var res = buffer.toString();
//   console.log(res)
//   var res2 = JSON.stringify(res);
//   console.log(res2)
// })

HTTP.read("http://localhost:1337")
.then(function(buffer){
  console.log( JSON.parse(buffer.toString()) )
})
.then(null,console.error)
.done()
  // var res2 = JSON.stringify(res);
  // console.log(res2)
