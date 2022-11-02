const express = require('express');
const router = express.Router();
const courseCtrl = require('../controllers/courses');
const ensureLoggedIn = require('../config/ensureLoggedIn');


router.get('/', courseCtrl.index);

router.get('/new', courseCtrl.new);

router.get('/:id', courseCtrl.show);

router.post('/', ensureLoggedIn, courseCtrl.create);

module.exports = router;