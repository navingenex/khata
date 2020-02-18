const express = require('express');
const router = express.Router();
const billController=require('./bill.controller');
const CONSTANTS=require('../../constants');


router.get('/',async  (req, res) => {
        billController.getbills((err,bills)=>{
            if(err)
                res.send(err);
            else
                res.send(bills);
        });
        
});
router.get('/weightType', (req, res) => {
    res.send(CONSTANTS.WEIGHT_TYPE);
});

router.post('/', async (req, res) => {
   billController.addbill(req.body,(err,data)=>{
       if(err)
            res.status(400).send({
                status:400,
                message:err.message
            });
        res.send(data);
   })
});


router.put('/', async(req, res) => {
    try {
        const bill=await billController.updateBill(req.body);
        res.send(bill);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.put('/:billId', (req, res) => {
    res.send('update bill');
});


module.exports=router;