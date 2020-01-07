const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const Schema = mongoose.Schema;

const ChatRoom = new Schema({
    name: { type: String, required: true, unique: true },
    type: { type: String, required: true },
    users: { type: Object },
    password: { type: String }
})

module.exports = ChatRoom;