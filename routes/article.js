const express = require('express');
const controller = require('../controllers/article');
const router = express.Router();

router.get('/:categoryId', controller.getByCategoryId);
router.get('/:articleId', controller.getArticleById);
router.delete('/:articleId', controller.delete);
router.post('/register', controller.create);
router.patch('/:articleId', controller.update);

module.exports = router;