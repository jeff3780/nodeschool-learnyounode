var fs = require('fs');
var path = require('path');

fs.readdir( process.argv[2], function (err, files) { 
	if (!err) {
		//console.log(files);
		for (var i = 0; i < files.length; i++) {
			if (path.extname(files[i]).slice(1) === process.argv[3]) {
				console.log(files[i]);
			}
			//console.log(files[i], path.extname(files[i]).slice(1));
		}
	}
	
});
//console.log("Fired callback.");

//Official soln:
/*    var fs = require('fs')
    var path = require('path')

    fs.readdir(process.argv[2], function (err, list) {
      list.forEach(function (file) {
        if (path.extname(file) === '.' + process.argv[3])
          console.log(file)
      })
    }) */