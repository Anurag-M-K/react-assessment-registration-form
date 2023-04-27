const express = require('express');
const { registerUserData, getUsersDetails } = require('../controllers/userController');
const router = express.Router()

router.post('/register',registerUserData)
router.get("/get-users-details",getUsersDetails)

module.exports = router;