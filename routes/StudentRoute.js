const express = require('express');
const router = express.Router();

const StudentController= require('../controllers/StudentController');

router.get('/',StudentController.initializeUi);
router.post('/',StudentController.findStudents);
router.get('/new-student-form',StudentController.newStudentForm);
router.post('/create-student',StudentController.createStudent);
router.get('/update-student/:student_id',StudentController.updateStudent);
router.get('/delete-student/:student_id',StudentController.deleteStudent);
 

module.exports=router;