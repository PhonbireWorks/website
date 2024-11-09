const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

let messages = [];

io.on('connection', (socket) => {
    console.log('a user connected');
    
    // Send existing messages to the new user
    socket.emit('chat history', messages);

    // Listen for new messages
    socket.on('chat message', (msg) => {
        messages.push(msg);
        io.emit('chat message', msg); // Broadcast message to all users
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});
