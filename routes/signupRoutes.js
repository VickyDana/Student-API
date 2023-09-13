const express = require('express');
const router = express.Router();
const signupController = require('../controllers/signupControllers');


router.post('/signup', signupController.signup);
router.post('/login', signupController.login);


module.exports = router;