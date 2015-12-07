var myMod = require('./myModule.js');

var dir = process.argv[2];
var ext = process.argv[3];

myMod(dir, ext, function(err, data){
  if (err){
    console.log(err.toString());
  }

  data.forEach(function(x){
    console.log(x);
  });
});
