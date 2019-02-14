const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000; // add this for heroku 

var app = express();
var server = http.createServer(app);
var io = socketIO(server);


app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected.');

    socket.emit('newMessage', {
        from: '@david',
        text: 'hello world',
        createdAt: new Date()
    });

    socket.on('createMessage', function (message) {
        console.log('created message', message);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected.')
    });
});






server.listen(port, () => {
    console.log(`Server is up on port ${port}.`)
});