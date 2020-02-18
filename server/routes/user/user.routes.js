const express=require('express');
const router = express.Router();

const userController=require('./user.controller');
router.get('/', (req, res) => {
    userController.user((err,data)=>{
        if(err)
            res.send(err);
        else
            res.send(data);
    })
    
});

module.exports=router;