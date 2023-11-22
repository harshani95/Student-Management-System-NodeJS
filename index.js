const express = require('express');
const bodyParser = require('body-parser');

const expressHandlebars= require('express-handlebars').engine;
require('dotenv').config();

const app =express();
const serverPort = process.env.SERVER_PORT || 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//===================
const HomeRouter = require('./routes/HomeRoute');
const LoginRouter = require('./routes//LoginRoute');
const SignUpRouter = require('./routes/SignUpRoute');
const StudentRouter = require('./routes/StudentRoute');
const ProgrameRouter = require('./routes/ProgrameRoute');
const RegistrationRouter = require('./routes/RegistrationRoute');
//===================


app.use(express.static('public'));

app.engine('hbs', expressHandlebars({extname:'.hbs',
    layoutsDir: __dirname + '/views/layouts'}));
app.set('view engine', '.hbs');

// app.get('/', (req, resp) => { 
//     resp.render('home'); 
// }); 

app.use('/',HomeRouter);
app.use('/login',LoginRouter);
app.use('/signup',SignUpRouter);
app.use('/student',StudentRouter);
app.use('/programe',ProgrameRouter);
app.use('/registration',RegistrationRouter);

app.listen(serverPort,()=>{
    console.log(`Server Started & Running on port ${serverPort}`);
});