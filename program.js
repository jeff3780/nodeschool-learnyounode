var fs = require('fs');

function countNL() {
	fs.readFile(process.argv[2], function doneReading(err, fBuff) {
		if (! err) {
			var fString = fBuff.toString();
			var fArr = fString.split('\n');
			console.log(fArr.length - 1);
		}
	})
}
countNL();

//Official soln:
/*    var fs = require('fs')
    var file = process.argv[2]

    fs.readFile(file, function (err, contents) {
      // fs.readFile(file, 'utf8', callback) can also be used
      var lines = contents.toString().split('\n').length - 1
      console.log(lines)
    }) */