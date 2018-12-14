const express = require('express');
const passport = require('passport');
const upload = require('../middleware/upload');
const controller = require('../controllers/article');
const router = express.Router();

router.get('/:categoryId', controller.getByCategoryId); // можно добавить динамическую подгрузку и сортировку, см блок 4, функционал заказов
router.get('/:articleId', controller.getArticleById);
router.delete('/:articleId', passport.authenticate('jwt', {session: false}), controller.delete);
router.post('/register', passport.authenticate('jwt', {session: false}), upload.single('image'), controller.create);
router.patch('/:articleId', passport.authenticate('jwt', {session: false}), upload.single('image'), controller.update);

module.exports = router;