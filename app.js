var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var db = require('./database/db');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.status(200).send({
        message: 'Welcome to ExpressJs User CRUD Application'
    })
});

var user = require('./controllers/user.controller')
app.post('/user', user.create);
app.get('/user', user.findAll);
app.get('/user/:userId', user.findOne);
app.put('/user/:userId', user.update);
app.delete('/user/:userId', user.delete);

module.exports = app;