var $ = require('./jquery.js');
var _ = require('lodash');
var socket = require('./io.js');
var Twitch = require('./twitch.js');

Twitch.init({clientId: 'b9qlciuk2w99i6gc7z24hdohkqix3x5'}, function(error, status) {
  if (error) {
    console.error(error);
  } else if (status.authenticated === true) {
    socket.emit('token', status.token);
  } else {
    Twitch.login({
      redirect_uri: 'http://localhost:8000/',
      popup: false,
      scope: ['user_read', 'channel_read']
    });
  }
});
