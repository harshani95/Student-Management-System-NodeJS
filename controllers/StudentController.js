const connectionPool = require('../db/DatabaseConnection');

const initializeUi=(req,resp)=>{
    connectionPool.getConnection((error, connection)=>{
         if(error){
             throw error;
         }

        const sql ="SELECT * FROM student";
         connection.query(sql,(err,rows)=>{

             connection.release();

             if(!err){
                 resp.render('student',{rows});
            }else{
                 console.log(err);
             }

            //  console.log(rows);

         });

     });
    }

    const findStudents=(req,resp)=>{
        connectionPool.getConnection((error, connection)=>{
            if(error){
                throw error;
            }
    
            let searchText=req.body.text;
    
            connection.query('SELECT * FROM student WHERE name LIKE ? OR address LIKE ?',
            ['%'+searchText+'%','%'+searchText+'%'],(err,rows)=>{
                connection.release();
    
                if(!err){
                    resp.render('student',{rows});
                }else{
                    console.log(err);
                }
                console.log(rows);
            });
        });
    }
    
    const studentForm=(req,resp)=>{
        resp.render('student');
    }

    const newStudentForm=(req,resp)=>{
        resp.render('new-student-form');
    }
    

    const createStudent=(req,resp)=>{
        connectionPool.getConnection((error, connection)=>{
            if(error){
                throw error;
            }
    
            const {student_id,name,address,contact} = req.body;
    
            connection.query('INSERT INTO student VALUES(?,?,?,?)',
            [student_id,name,address,contact],(err,rows)=>{
                connection.release();
                if(!err){
                    resp.render('/student');
                }else{
                    console.log(err);
                }
                console.log("Successfully Created");
            });
        });
    }
    
    
    const updateStudent=(req,resp)=>{
        connectionPool.getConnection((error, connection)=>{
            if(error){
                throw error;
            }
    
            const {student_id,name,address,contact} = req.body;
    
            connection.query('UPDATE student SET name=?, address=?, contact=? WHERE student_id=?',
            [name,address,contact,student_id],(err,rows)=>{
                if(!err){
                    resp.render('new-student-form');
                }else{
                    console.log(err);
                }
                console.log(rows[0]);
            });
        });
    }
    
    
    const deleteStudent=(req,resp)=>{
        connectionPool.getConnection((error, connection)=>{
            if(error){
                throw error;
            }
            connection.query('DELETE FROM student WHERE student_id=?',
            [req.params.student_id],(err,rows)=>{
                connection.release();
                if(!err){
                    resp.redirect('/student');
                }else{
                    console.log(err);
                }
            });
        });
    }
    
    module.exports={
        initializeUi,
        studentForm,
        findStudents,
        newStudentForm,
        createStudent,
        updateStudent,
        deleteStudent  
    }
    