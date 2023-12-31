const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentControllers');


router.post('/create', studentController.createStudent);
router.get('/getStudents', studentController.getStudents);
router.get('/getStudents/:id', studentController.getAStudent);
router.get('/searchStudents/:id', studentController.SearchStudents);
router.delete('/deleteOne/:id',studentController.deleteOne);
router.delete('/deleteAll', studentController.deleteAll)
router.put('/updateStudents/:id',studentController.updateStudents);

module.exports = router;