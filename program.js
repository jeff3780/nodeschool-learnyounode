// give credit to: https://github.com/JeffPaine/learnyounode-solutions/blob/master/08_http_collect.js
var http = require('http');
var url = process.argv[2];

http.get(url, function (res){
	var data = [];
	res.setEncoding('utf8');
	res.on('data', function (r) {
		data.push(r);
	});
	res.on('end', function () {
		console.log(data.join('').length);
		console.log(data.join(''));
	});
	res.on('error', console.error);
});

//http://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&sensor=true

/*Your solution to HTTP COLLECT passed!

Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────

    var http = require('http')
    var bl = require('bl')

    http.get(process.argv[2], function (response) {
      response.pipe(bl(function (err, data) {
        if (err)
          return console.error(err)
        data = data.toString()
        console.log(data.length)
        console.log(data)
      }))
    })*/