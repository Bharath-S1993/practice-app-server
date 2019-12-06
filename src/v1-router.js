const express = require('express');
const userCtrl = require('../src/routers/routes')
const router = express.Router();



router.get('/', userCtrl.findUser);
router.post('/user', userCtrl.createUser);

module.exports = router;