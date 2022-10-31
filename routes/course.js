const express = require('express');
const router = express.Router();

const courseCtrl = require('../controllers/courses');

router.get('/', courseCtrl.index);

router.get('/new', courseCtrl.new);

router.post('/', courseCtrl.create);

module.exports = router;