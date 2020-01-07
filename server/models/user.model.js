const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const Schema = mongoose.Schema;

const User = new Schema({
    user_name: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    account_type: { type:String, required: true }
})

module.exports = User;