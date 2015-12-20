// var q = require('q');
// var json = process.argv[2]
//
// q.fcall(function() {
//   return JSON.parse(json)
// }).then(null,console.log)

var q = require('q');
q.fcall(JSON.parse, process.argv[2]).then(null,console.log)
