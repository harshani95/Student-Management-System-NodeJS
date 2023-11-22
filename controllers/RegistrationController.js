const connectionPool = require('../db/DatabaseConnection');

const initializeUi=(req,resp)=>{
    connectionPool.getConnection((error, connection)=>{
         if(error){
             throw error;
         }

        const sql ="SELECT * FROM registration";
         connection.query(sql,(err,rows)=>{

             connection.release();

             if(!err){
                 resp.render('registration',{rows});
            }else{
                 console.log(err);
             }

             console.log(rows);

         });

     });
    }

     
    module.exports={
        initializeUi
    }