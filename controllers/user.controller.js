var User = require('../models/user.model');

exports.create = (req, res) => {
    if (!req.body.username) {
        return res.status(400).send({
            message: 'User can\'t be empty'
        });
    }
    var user = new User({
        userName: req.body.username,
        age: req.body.age
    })

    user.save((err, data) => {
        if (err) {
            res.status(500).send({
                message: 'some error occuar cart to try again..'
            })
        } else {
            res.send(data);
        }
    })
}

exports.findAll = (req, res) => {
    var userList = {};
    User.find((err, user) => {
        if (err) {
            res.status(500).send({
                message: 'Something went wrong care to try agin later'
            });
        } else {
            userList['users'] = user;
            res.send(userList);
        }
    })
}

exports.findOne = (req, res) => {
    User.findById(req.params.userId, (err, user) => {
        if (err) {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: 'Not found doc with id ' + req.params.userId
                })
            }
            return res.status(500).send({
                message: 'Error retrieving user with id' + req.params.userId
            })
        }
        return res.send(user);
    })
}

exports.update = (req, res) => {
    User.findById(req.params.userId, (err, user) => {
        if (err) {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: 'Not found doc with id ' + req.params.userId
                })
            }
            return res.status(500).send({
                message: 'Error retrieving user with id' + req.params.userId
            })
        }
        user.userName = req.body.username;
        user.age = req.body.age;
        user.save((err, data) => {
            if (err) {
                res.status(500).send({
                    message: 'some error occuar cart to try again..'
                })
            } else {
                res.send(data);
            }
        })
    })
}

exports.delete = (req, res) => {
    User.findByIdAndRemove(req.params.userId, (err, user) => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: 'Not found doc with id ' + req.params.userId
            })
            return res.status(500).send({
                message: 'Error retrieving user with id' + req.params.userId
            })
        }
        res.status(200).send({
            message: ' User has been removed successfully'
        })
    })
}