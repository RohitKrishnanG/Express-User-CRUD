var Mongoose = require('mongoose');
var url = 'mongodb://localhost:27017/CRUDUser';
Mongoose.connect(url)

Mongoose.connection.on('error', function () {
    console.log('Could not connect to database please try after some time');
    process.exit();
})

Mongoose.connection.once('open', function () {
    console.log('Successfully  connected to  database');
})

Mongoose.Promise = global.Promise;