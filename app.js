var express = require('express');
var socket = require('socket.io');

var app = express();

app.use(express.static('public'));

var server = app.listen(4000, function(){
    console.log('Server Up');
});

var io = socket(server);

io.on('connection', function(socket){
    console.log('Socket Connection');
    socket.on('chat', function(data){
        io.sockets.emit('chat', data);
    });

    socket.on('typing', function(data){
        socket.broadcast.emit('typing', data);
    });
});
