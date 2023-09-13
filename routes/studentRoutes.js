const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentControllers');


router.post('/create', studentController.createStudent);
router.get('/getStudents', studentController.getStudents);

module.exports = router;