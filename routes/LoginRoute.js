const express = require('express');
const router = express.Router();

//const LoginController= require('../controllers/LoginController');

router.get('/', (req, res) => { 
    res.render('login'); 
}); 

module.exports=router;