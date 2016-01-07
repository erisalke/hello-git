var qhttp = require("q-io/http")
  , _ = require('lodash')
  , dbPath = "http://localhost:7001/"
  , cachePath = "http://localhost:7000/"

var dbPathBuilder = _.bind(String.prototype.concat, dbPath)

qhttp.read(cachePath)
.then(_.flowRight(qhttp.read, dbPathBuilder))
.then(_.flowRight(console.log, JSON.parse))
.then(null, console.error)
.done()
