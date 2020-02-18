

const UserSchema = require('../user/user');
const dbFunction = require('../../db-functions');
const authService=require('./auth.service');
module.exports = {
    signUp: async function sighUp(req, callback) {        
        try {
            const user = await dbFunction.getOne(UserSchema, { email: req.body.email }, {}, {});
            if(user){
                throw new Error('User already exists');
            }                
                const newUser=new UserSchema({
                    email:req.body.email,
                    password:req.body.password
                })
                dbFunction.create(newUser,(err,data)=>{
                    if(err)
                        throw err;
                    else
                        callback(null,data)
                })
        } catch (error) {
            callback(error.message)
        }
    },
    signOut:async function signOut(token,callback){
        try {
            const user=await dbFunction.getOne(UserSchema,{accessToken:token},{},{});
            callback(user)
        } catch (error) {
            callback(error)
        }
    },
    authenticate:async function authenticate(req,res,callback){
        if(req.headers.authorization){            
          
                authService.isAutheticated(req.headers.authorization,UserSchema,(err,isVerified)=>{
                    if(err)
                        callback(err);
                    else
                        callback(null,isVerified);
                });
                    
            
        }else
        callback(new Error('Unauthorised'))        
    }
}