var fs = require('fs');
var stream = fs.createWriteStream("version.json");
stream.once('open', function(fd) {
    stream.write('{"buildDate":"' + new Date().toISOString() + '"}');
    stream.end();
});