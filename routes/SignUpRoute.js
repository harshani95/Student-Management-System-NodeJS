const express = require('express');
const router = express.Router();

//const SignUpController= require('../controllers/SignUpController');

router.get('/', (req, res) => { 
    res.render('signup'); 
}); 


module.exports=router;