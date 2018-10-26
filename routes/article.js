const express = require('express');
const controller = require('../controllers/article');
const router = express.Router();

router.get('/:id', controller.getById);
router.delete('/:id', controller.remove);
router.post('/register', controller.create);
router.patch('/:id', controller.update);

module.exports = router;