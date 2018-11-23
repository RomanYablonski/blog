const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const keys = require('../config/keys');
const errorHandler = require('../utils/errorhandler');

module.exports.login = async function(req, res) {
    const candidate = await User.findOne({email: req.body.email});

    if (candidate) {
        // Проверка пользователя
        const passwordResult = bcrypt.compareSync(req.body.password, candidate.password);
        if (passwordResult) {
            // Генерация токена, пароли совпали
            const token = jwt.sign({
                email: candidate.email,
                userId: candidate._id
            }, keys.jwt, {expiresIn: 3600});

            res.status(200).json({
                token: `Bearer ${token}`
            })
        } else {
            // Пароли не совпали
            res.status(401).json({
                message: 'Incorrect password'
            })
        }
    } else {
        // Пользователя нет, ошибка
        res.status(404).json({
            message: 'User not found'
        })
    }
};

module.exports.register = async function(req, res) {
    const candidate = await User.findOne({email: req.body.email});

    if(candidate) {
        // Пользователь существует, отдаем ошибку
        res.status(409).json({
            message: 'This email is already occupied. Please log in.'
        })
    } else {
        const salt = bcrypt.genSaltSync(10);
        const password = req.body.password;
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(password, salt)
        });
        try {
            await user.save();
            res.status(201).json({user})
        } catch(e) {
            errorHandler(res, e);
        }

    }
};
