const UserSchema=require('./user');
const dbFunctions=require('../../db-functions')
module.exports={
    user:function user(callback){
        dbFunctions.getAll(UserSchema,{},{},{},(err,data)=>{
            if(err)
                callback(err);
            else if(data.length==0)
                callback('error');
            else
                callback(null,data)
        });
    }
}