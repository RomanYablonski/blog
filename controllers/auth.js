const User = require('../models/User');

module.exports.login = function(req, res) {
    res.status(200).json({
        login: {
            email: req.body.email,
            password: req.body.password
        }
    })
};

module.exports.register = function(req, res) {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })

    user.save().then(() => console.log('User created'))
}