var express = require('express')
  , fs = require('fs')
  , path = process.argv[3]

var app = express()

app.get('/books', function(req, res) {
  fs.readFile(path, function(err, data) {
    if (err)
      res.sendStatus(500)

    var object = JSON.parse(data);
    
    res.json(object)
  })
})

app.listen(process.argv[2])
