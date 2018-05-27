var fs = require('fs');
var stream = fs.createWriteStream("version.json");
stream.once('open', function(fd) {
    stream.write('{"build-date":"' + new Date().toISOString() + '"}');
    stream.end();
});