var socket = io.connect('http://localhost:4000');

var message = document.getElementById('message'),
    username = document.getElementById('username'),
    btn = document.getElementById('send'),
    feedback = document.getElementById('feedback'),
    output = document.getElementById('output');

btn.addEventListener('click', function(){
    socket.emit('chat', {
        message: message.value,
        username: username.value
    });
});

message.addEventListener('keypress', function(){
    socket.emit('typing', username.value);
});

socket.on('chat', function(data){
    feedback.innerHTML = "";
    output.innerHTML += '<p><strong>' + data.username + ': </strong>' + data.message + '</p>';
});

socket.on('typing', function(data){
    feedback.innerHTML = '<p><em>'+data+' is typing a message...</em></p>';
});
