const express = require('express');
const router = express.Router();

//const RegistrationController= require('../controllers/RegistrationController');

// router.get('/student',StudentController.initializeUi);
// router.post('/student',StudentController.findStudents);
// router.get('/new-student-form',StudentController.newStudentForm);
// router.post('/create-student',StudentController.createStudent);
// router.get('/update-student/:nic',StudentController.updateStudent);
// router.get('/delete-student/:nic',StudentController.deleteStudent);

router.get('/', (req, res) => { 
    res.render('registration'); 
}); 


module.exports=router;