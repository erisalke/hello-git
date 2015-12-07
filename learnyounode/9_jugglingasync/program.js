var myModule = require('./myModule');
var urls = [process.argv[2],process.argv[3],process.argv[4]];
var results = [];

var printRes = function(){
  console.log(results[0]);
  console.log(results[1]);
  console.log(results[2]);
}

var pointer = 0;
var getUrl = function(index){
  myModule(urls[index], function(err,data){
    if (err) console.log(err);

    results[index] = data;
    pointer++;

    if (pointer === 3)
      printRes();
  });
}

for(var i = 0; i< urls.length; i++){
  getUrl(i);
}
