const express = require('express');
const { registerUser, loginUser, logoutUser, userProfile } = require('../controllers/userControllers');
const { isAuthenticated } = require('../middleware/auth');
const router = express.Router();

router.route('/register').post(registerUser);

router.route('/login').post(loginUser);

router.route('/logout').get(logoutUser);

router.route('/profile').get(isAuthenticated, userProfile);

module.exports = router;