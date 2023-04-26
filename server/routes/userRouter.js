const express = require('express');
const { registerUserData } = require('../controllers/userController');
const router = express.Router()

router.post('/register',registerUserData)

module.exports = router;