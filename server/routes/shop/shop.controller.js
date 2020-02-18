
const dbFunctions=require('../../db-functions');
const Shop=require('./shop');
module.exports={
    create:function create(req,callback){
        const shop=new Shop(req.body)
       dbFunctions.create(shop,(err,data)=>{
           if(err)
                callback(err.message);
            else
                callback(data)
       })
    },
    findOne:async function findOne(req,callback){
        try {
            const data=await dbFunctions.findAndPopulate(Shop,{_id:req.id},{},{});
            callback(null,data)
        } catch (error) {
            callback(error)
        }
    }
}
