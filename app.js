const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const Message = require('./Message.js');

mongoose.connect('mongodb://localhost');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {

});

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/add_message', (req, res) => {
    console.log(req.body);
    const new_message = new Message({ name: req.body.name, contents: req.body.contents, time: Date.now() });
    new_message.save(err => {
        if (err) res.send("Failed to save.") && console.log(err);
        else res.send('Successfully saved!');
    });
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});