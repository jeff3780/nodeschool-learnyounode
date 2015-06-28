var http = require('http');
var qs = require('querystring');
//var postdata2 = 'this is a string';
var postData = "{\"TrackingName\" : \"NodeJS8\",\"Timestamp\" : \"06/27/2015 12:52:30 PM\",\"Longitude\" : -80.20,\"Latitude\" : 37.05}";
/*var postData = '{' + qs.stringify({
	\"TrackingName\" : \"NodeJS6\",
	\"Timestamp\" : \"06/27/2015 12:45:30 PM\",
	\"Longitude\" : -80.15,
	\"Latitude\" : 37.05
}) + '}';*/

var options = {
  hostname: 'een.gastechnology.org',
  port: 6180,
  path: '/geoevent/rest/receiver/BRT-rest-json-in-RestTestPt',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'/*,
    'Content-Length': postData.length*/
  }
};

var req = http.request(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  });
});

req.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});

// write data to request body
console.log("Sending:", postData);
req.write(postData);
req.end();