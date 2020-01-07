const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const http = require('http');
const socketio = require('socket.io');
const cors = require('cors');

const PORT = process.env.PORT || 4000;
const app = express();
const server = http.createServer(app);
const io = socketio(server);

const { addUser, removeUser, getUser, getUsersInRoom } = require('./functions/functions');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(cors());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/chatterbox', 
{ useNewUrlParser: true, useUnifiedTopology: true });

io.on('connection', socket => {
    socket.on('join', ({ user, room }, callback) => {
        const { error, userObj } = addUser({ id: socket.id, user, room });

        if (error) return callback(error);

        socket.join(userObj.room);

        socket.emit('message', { user: 'Admin', text: `${userObj.username}, welcome to room ${userObj.room}.`});
        socket.broadcast.to(userObj.room).emit('message', { user: 'Admin', text: `${userObj.username} has joined!` });

        io.to(userObj.room).emit('roomData', { room: userObj.room, users: getUsersInRoom(userObj.room) });

        callback();
    })

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);
    
        io.to(user.room).emit('message', { user: user.username, text: message });
    
        callback();
      });
    
    socket.on('disconnect', () => {
      const user = removeUser(socket.id);
  
      if(user) {
        io.to(user.room).emit('message', { user: 'Admin', text: `${user.username} has left.` });
        io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});
      }
    })
});

server.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}`)
})