const express = require('express');
const router = express.Router();

const RegistrationController= require('../controllers/RegistrationController');

 router.get('/',RegistrationController.initializeUi);
//router.post('/',RegistrationController.findRegistrations);
// router.get('/new-student-form',StudentController.newStudentForm);
// router.post('/create-student',StudentController.createStudent);
// router.get('/update-student/:nic',StudentController.updateStudent);
// router.get('/delete-student/:nic',StudentController.deleteStudent);

module.exports=router;