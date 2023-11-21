const express = require('express');
const router = express.Router();

//const ProgrameController= require('../controllers/ProgrameController');

// router.get('/student',StudentController.initializeUi);
// router.post('/student',StudentController.findStudents);
// router.get('/new-student-form',StudentController.newStudentForm);
// router.post('/create-student',StudentController.createStudent);
// router.get('/update-student/:programe_id',StudentController.updateStudent);
// router.get('/delete-student/:programe_id',StudentController.deleteStudent);

router.get('/', (req, res) => { 
    res.render('programe'); 
}); 


module.exports=router;