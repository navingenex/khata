const Item=require('./item');
const dbFunctions=require('../../db-functions');
const itemService=require('./item.service');
module.exports={
    getItems:async function getItems(callback){
            try {
                const items=await dbFunctions.getAll();
                return items;
            } catch (error) {
                return error
            }
    },
    addItem:async function addItem(payload,callback){
            try {
                if(payload.items){
                    const finalItem=await itemService.calculateAmount(payload.items);
                    if(finalItem.message)
                    throw amount
                    const item=new Item(finalItem);
                    dbFunctions.create(item,(err,data)=>{
                        if(err)
                            callback(err);
                        else{
                            callback(null,data)
                        }
                            
                    });
                }else{
                    throw new Error('Item is empty')
                }
                
            } catch (error) {
                callback(error);
            }
            
        
    }
}

