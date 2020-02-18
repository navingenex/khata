const jwt=require('jsonwebtoken');
const dbFunctions=require('../../db-functions');

module.exports={
    isAutheticated: function isAutheticated(token,Schema,callback){
            jwt.verify(token,process.env.secret,async (err,decodeed)=>{
                if(err)
                    callback(err)
                else{
                   try {
                    const data=await dbFunctions.getOne(Schema,{_id:decodeed.id},{},{});
                    callback(null,true);
                   } catch (error) {
                       callback(error)
                   }
                }
                    
            });            
       
    }
}