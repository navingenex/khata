const express = require('express');
const router = express.Router();
const authController=require('./auth.controller');

router.post('/signup', (req, res) => {
    authController.signUp(req,(err,data)=>{
        if(err)
            res.status(400).send(err);
        else{
            res.send(data);
        }
            
    })
});
router.put('/signout', (req, res) => {
    if(req.headers.authorization){
        authController.signOut(req.headers.authorization,(err,data)=>{
            if(err)
                res.status(404).send(err.message);
            else
                res.send(data);
        })
    }else
    res.status(400).send({
        success:false,
        message:'Authorization failed'
    })
});
 

module.exports=router;