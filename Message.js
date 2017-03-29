const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    name: String,
    contents: String,
    time: Date
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;