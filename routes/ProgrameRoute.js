const express = require('express');
const router = express.Router();

const ProgrameController= require('../controllers/ProgrameController');

router.get('/',ProgrameController.initializeUi);
router.post('/',ProgrameController.findProgrames);
router.get('/new-programe-form',ProgrameController.newProgrameForm);
router.post('/create-programe',ProgrameController.createPrograme);
router.get('/update-programe-form/:programe_id',ProgrameController.updateProgrameForm);
router.post('/update-programe',ProgrameController.updatePrograme);
router.get('/delete-programe/:programe_id',ProgrameController.deletePrograme);


module.exports=router;