const express = require('express');
router = express.Router();
con = require('./conn')


router.post('/user',(req,res)=>{
    let user = {
    
        name:req.body.name,
        surname:req.body.surname,
        email:req.body.email,
        
       }; 
 
    var sql = "INSERT INTO user set ?";
    con.query(sql,[user],function(err,result){

        if(err)throw err;
        
        else
        { 
        con.query('select * from user',function(err,result){
            if (err) throw err;
            else{
               
                return res.send(result)
            }

        })
    }
})

})


router.get('/user',(req,res)=>{

    con.query('SELECT * FROM user',function(err,result){
    if(err) throw err;
    
    else
    {
        return res.send(result);
    }
   })

})


router.get('/user/:id',(req,res)=>{
    con.query('SELECT name, surname, email FROM user WHERE id = ?',
    [req.params.id],(err,result)=>{
        if(!err)
            res.send(result);
        else
            console.log(err);
    })

    //Delete a student
router.delete('/user/:id',(req,res)=>{

    con.query('DELETE FROM user WHERE id = ?',[req.params.id],
    (err,result,fields)=>{
        if(!err){
            res.send(result);
            console.log('Succefully deleted!!')
        }
        else
            console.log(err);
    }) 
});


// Update user
    
});


module.exports = router;