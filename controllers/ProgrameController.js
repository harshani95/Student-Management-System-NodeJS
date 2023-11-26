const connectionPool = require('../db/DatabaseConnection');

const initializeUi=(req,resp)=>{
    connectionPool.getConnection((error, connection)=>{
         if(error){
             throw error;
         }

        const sql ="SELECT * FROM programe";
         connection.query(sql,(err,rows)=>{

             connection.release();

             if(!err){
                 resp.render('programe',{rows});
            }else{
                 console.log(err);
             }

             console.log(rows);

         });

     });
    }

    const findProgrames=(req,resp)=>{
        connectionPool.getConnection((error, connection)=>{
            if(error){
                throw error;
            }
    
            let searchText=req.body.text;
    
            connection.query('SELECT * FROM programe WHERE name LIKE ? ',
            ['%'+searchText+'%','%'+searchText+'%'],(err,rows)=>{
                connection.release();
    
                if(!err){
                    resp.render('programe',{rows});
                }else{
                    console.log(err);
                }
                console.log(rows);
            });
        });
    }
    
    const programeForm=(req,resp)=>{
        resp.render('programe');
    }

    const newProgrameForm=(req,resp)=>{
        resp.render('new-programe-form');
    }
    

    const createPrograme=(req,resp)=>{
        connectionPool.getConnection((error, connection)=>{
            if(error){
                throw error;
            }
    
            const {programe_id, name, cost} = req.body;
    
            connection.query('INSERT INTO programe VALUES(?,?,?)',
            [programe_id, name, cost],(err,rows)=>{
                connection.release();
                if(!err){
                    resp.render('new-programe-form');
                    resp.send("Successfully Created");
                }else{
                    console.log(err);
                }
                console.log(rows);
            });
        });
    }
    
    
    const updateProgrameForm=(req,resp)=>{
        connectionPool.getConnection((error, connection)=>{
            if(error){
                throw error;
            }
            connection.query('SELECT * FROM programe WHERE programe_id=?',
            [req.params.programe_id],(err,rows)=>{
                connection.release();
                const data =rows[0];
                if(!err){
                    resp.render('update-programe-form',{programe:data});
                }else{
                    console.log(err);
                }
                console.log(rows[0]);
            });
        });
    }
     
    const updatePrograme=(req,resp)=>{
        connectionPool.getConnection((error, connection)=>{
            if(error){
                throw error;
            }
    
            const {programe_id,name,cost} = req.body;
    
            connection.query('UPDATE programe SET name=?, cost=? WHERE programe_id=?',
            [name,cost,programe_id],(err,rows)=>{
                connection.release();
                if(!err){
                    resp.render('programe');
                    resp.send("Successfully Updated");
                }else{
                    console.log(err);
                }
                console.log(rows[0]);
            });
        });
    }
    
    const deletePrograme=(req,resp)=>{
        connectionPool.getConnection((error, connection)=>{
            if(error){
                throw error;
            }
            connection.query('DELETE FROM programe WHERE programe_id=?',
            [req.params.programe_id],(err,rows)=>{
                connection.release();
                if(!err){
                    resp.redirect('/programe');
                }else{
                    console.log(err);
                }
            });
        });
    }
    
    module.exports={
        initializeUi,
        programeForm,
        findProgrames,
        newProgrameForm,
        createPrograme,
        updatePrograme,
        updateProgrameForm,
        deletePrograme  
    }
    