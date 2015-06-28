var http = require('http');
var bl = require('bl');

var results = [];
var count = 0;

function printResults () {
  for (var i = 0; i < 3; i++)
    console.log(results[i]);
}

function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err)
        return console.error(err);

      results[index] = data.toString();
      count++;

      if (count == 3) // yay! we are the last one!
        printResults();
    }))
  })
}

for (var i = 0; i < 3; i++)
  httpGet(i);

//node program http://localhost:6080/arcgis/rest/services/GeoEvent/IncidentDetection/FeatureServer/0/query?where%3D1%253D1%26f%3Djson http://localhost:6080/arcgis/rest/services/GeoEvent/IncidentDetection/FeatureServer/1/query?where%3D1%253D1%26f%3Djson http://localhost:6080/arcgis/rest/services/GeoEvent/IncidentDetection/FeatureServer/2/query?where%3D1%253D1%26f%3Djson

/*
Your solution to JUGGLING ASYNC passed!

Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────

    var http = require('http')
    var bl = require('bl')
    var results = []
    var count = 0

    function printResults () {
      for (var i = 0; i < 3; i++)
        console.log(results[i])
    }

    function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err)
            return console.error(err)

          results[index] = data.toString()
          count++

          if (count == 3)
            printResults()
        }))
      })
    }

    for (var i = 0; i < 3; i++)
      httpGet(i)
  */