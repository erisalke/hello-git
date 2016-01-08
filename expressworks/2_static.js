var express = require('express');
var staticPath = process.argv[3]

var app = express()
app.use(express.static(staticPath || path.join(__dirname, 'public')))
app.listen(process.argv[2])
