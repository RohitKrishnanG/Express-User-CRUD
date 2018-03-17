var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
    userName: String,
    age: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);