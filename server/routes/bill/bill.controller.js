const Bill=require('./bill');
const dbFunctions=require('../../db-functions');
const billService=require('./bill.service');
module.exports={
    getbills:async function getbills(callback){
            try {
                 dbFunctions.getAll(Bill,{},{},{},(err,bills)=>{
                     if(err)
                        throw err;
                    else
                        callback(null,bills) 
                 });
            
            } catch (error) {
                callback(error) 
            }
    },
    addbill:async function addbill(payload,callback){
            try {
                if(payload.items){
                    const finalbill=await billService.calculateAmount(payload.items);
                    if(finalbill.message)
                    throw amount;
                    else{
                        const bill=await billService.finalbill(payload.customer,payload.items);
                         const newBill=new Bill(bill);
                        dbFunctions.create(newBill,(err,data)=>{
                            if(err)
                                callback(err);
                            else{
                                callback(null,data)
                            }                                
                        });
                    }                   
                }else{
                    throw new Error('bill is empty')
                }                
            } catch (error) {
                callback(error);
            }        
    },
    updateBill:async function updateBill(payload){
        try {
            const bill=await dbFunctions.getOne(Bill,{_id:payload._id},{},{});
            const updateBill=await billService.updateBill(payload,bill);
            return updateBill;
    
        } catch (error) {
            throw error.message
        }
    }
}

