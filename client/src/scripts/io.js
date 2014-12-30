var $ = require('./jquery.js');
var io = global.io;
var socket = io();
module.exports = socket;
$(window).on('beforeunload', function(){
    socket.close();
});
