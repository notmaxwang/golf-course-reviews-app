const express = require('express');
const router = express.Router();
const coursesCtrl = require('../controllers/courses');
const ensureLoggedIn = require('../config/ensureLoggedIn');


router.get('/', coursesCtrl.index);

router.get('/new', ensureLoggedIn, coursesCtrl.new);

router.get('/:id', coursesCtrl.show);

router.post('/', ensureLoggedIn, coursesCtrl.create);

router.get('/:id/edit', ensureLoggedIn, coursesCtrl.edit);

router.put('/:id', ensureLoggedIn, coursesCtrl.update);

router.delete('/:id', ensureLoggedIn, coursesCtrl.delete);

module.exports = router;