const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message')
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000; // add this for heroku 

var app = express();
var server = http.createServer(app);
var io = socketIO(server);



app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected.');

    // sends to new user 
    socket.emit('newMessage', generateMessage('Admin', 'Welcome to the Chat App!'));

    // sends to everyone else
    socket.broadcast.emit('newMessage', generateMessage('Admin', 'New User Joined!'));

    socket.on('createMessage', (message, callback) => {
        console.log('created message', message);
        io.emit('newMessage', generateMessage(message.from, message.text));
        callback('This is from the server.');
    });

    socket.on('createLocationMessage', (coords) => {
        io.emit('newMessage', generateMessage('Admin', `${coords.latitude}, ${coords.longitude}`));
    });

    socket.on('disconnect', () => {
        console.log('User disconnected.')
    });
});


server.listen(port, () => {
    console.log(`Server is up on port ${port}.`)
});