var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
module.exports = app;

require('./socket.js')(server);
require('./static.js')(app);

server.listen(8000);
console.log('listening on port 8000')
