// give credit to: https://github.com/JeffPaine/learnyounode-solutions/blob/master/07_http_client.js 
var http = require('http');

var url = process.argv[2];
http.get(url, function (res){
  res.setEncoding('utf8');
  res.on('data', console.log);
  res.on('error', console.error);
});

//http://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&sensor=true

/* Your solution to HTTP CLIENT passed!

Here's the official solution in case you want to compare notes:

─────────────────────────────────────────────────────────────────

    var http = require('http')

    http.get(process.argv[2], function (response) {
      response.setEncoding('utf8')
      response.on('data', console.log)
      response.on('error', console.error)
    })

─────────────────────────────────────────────────────────────────
*/
