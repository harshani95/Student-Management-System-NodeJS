const connectionPool = require('../db/DatabaseConnection');

const initializeUi=(req,resp)=>{
    connectionPool.getConnection((error, connection)=>{
         if(error){
             throw error;
         }

        else{
            resp.render('registration');
        }

     });
    }


    const initializeRowDataUi=(req,resp)=>{
        connectionPool.getConnection((error, connection)=>{
             if(error){
                 throw error;
             }
            const sql ="SELECT * FROM registration";
             connection.query(sql,(err,rows)=>{
    
                 connection.release();
    
                 if(!err){
                        resp.render('registration-list',{rows});
                     
                }else{
                     console.log(err);
                 }
             });
    
         });
        }

    const registrationForm=(req,resp)=>{
        resp.render('registration');
    }

    const newRegistrationForm=(req,resp)=>{
        resp.render('registration-list');
    }

    const createRegistration=(req,resp)=>{
        connectionPool.getConnection((error, connection)=>{
            if(error){
                throw error;
            }
    
            const {reg_id,date,student_id,programe_id} = req.body;
    
            connection.query('INSERT INTO registration VALUES(?,?,?,?)',
            [reg_id,date,student_id,programe_id],(err,rows)=>{
                connection.release();
                if(!err){
                    resp.render('registration');
                    resp.send("Successfully Created");
                }else{
                    console.log(err);
                }
                console.log(rows);
            });
        });
    }

     
    module.exports={
        initializeUi,
        initializeRowDataUi,
        registrationForm,
        newRegistrationForm,
        createRegistration
    }