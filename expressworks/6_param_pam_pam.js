var express = require('express');

var app = express()
app.put('/message/:id', function(req, res) {
  var id = req.params.id
  var result = require('crypto')
      .createHash('sha1')
      .update(new Date().toDateString() + id)
      .digest('hex')
  res.send(result)
})

app.listen(process.argv[2])
