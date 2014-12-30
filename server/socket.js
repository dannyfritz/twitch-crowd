module.exports = function (server) {
  var io = require('socket.io').listen(server);
  io.on('connection', function (socket) {
    socket.on('token', function (token) {
      console.log(token);
    });
  });
}
