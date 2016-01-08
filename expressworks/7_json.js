var express = require('express');

var app = express()

app.get('/search', function(req, res){
  // var results = req.query.results
  // var type = req.query.type
  // var page = req.query.page
  //
  // var json = JSON.stringify( { results: results,
  //                              type: type,
  //                              page: page } );
  //
  // res.send(json)

  res.send(req.query) // goddamnit! it's just that -.-
                      // yes... it's exactly that - the JSON can change, code stays the same
})

app.listen(process.argv[2])
