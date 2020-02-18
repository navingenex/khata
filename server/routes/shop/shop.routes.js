const express = require('express');
const router = express.Router();

const shopController=require('./shop.controller');
const authController=require('../auth/auth.controller');
router.post('/create',authController.authenticate, (req, res,next) => {    
    if(req.body){
        shopController.create(req,(err,data)=>{
            if(err)
                res.send(err);
            else
            res.send(value);
        })
        
    }else
        res.status(400).send({success:false,message:'Wrong body'});;
});
router.get('/shop/:id',authController.authenticate, (req, res) => {
    shopController.findOne(req.params,(err,data)=>{
        if(err)
            res.status(400).send(err);
        else if(!data)
            res.send({data:[]});
        else
            res.send(data);
    })
});


module.exports=router;