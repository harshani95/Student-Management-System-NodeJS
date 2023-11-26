const express = require('express');
const router = express.Router();

const RegistrationController= require('../controllers/RegistrationController');

 router.get('/',RegistrationController.initializeUi);
 router.get('/registration-list',RegistrationController.initializeRowDataUi);
 router.get('/registration-list',RegistrationController.newRegistrationForm);
 router.post('/create-registration',RegistrationController.createRegistration);

module.exports=router;