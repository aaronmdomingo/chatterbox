const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const Schema = mongoose.Schema;

const Message = new Schema({
    user_name: { type: String, required: true },
    value: { type: String },
    status: { type: String }
})

module.exports = Message;