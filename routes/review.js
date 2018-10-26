const express = require('express');
const controller = require('../controllers/review');
const router = express.Router();

router.get('/', controller.getAll);
router.get('/:article', controller.getArticleReviews);
router.get('/:article/:id', controller.getById);
router.delete('/:id', controller.remove);
router.post('/register', controller.create);
router.patch('/:id', controller.update);

module.exports = router;