const express = require('express');
const router = express.Router();
const itemController=require('./item.controller');

router.get('/',async  (req, res) => {
    try {
        const items=await itemController.getItems();
        res.send(items);    
    } catch (error) {
        res.send(error); 
    }
    
});
router.get('/:itemId', (req, res) => {
    res.send('get by id');
});
router.post('/', async (req, res) => {
   itemController.addItem(req.body,(err,data)=>{
       if(err)
            res.status(400).send({
                status:400,
                message:err.message
            });
        res.send(data);
   })
});
router.put('/:itemId', (req, res) => {
    res.send('update item');
});



module.exports=router;