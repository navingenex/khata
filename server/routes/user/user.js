const mongoose=require('mongoose');
Schema=mongoose.Schema;
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

const userSchema=new Schema({
    email:{
        type:String,
        trim:true,
        require:true
    },
    password:{
        type:String,
        trim:true,
        require:true
    },
    accessToken:{
        type:String,
        trim:true,
        require:false,        
    },
    billId:[{
        type:Schema.Types.ObjectId,
        require:false,
        ref:'Bills'
    }]
},{timestamps:true});

userSchema.pre('save',function(next){
    const tempPassword=this.password;
    this.password=bcrypt.hashSync(this.password,10);
    if(bcrypt.compareSync(tempPassword,this.password)){
        const token=jwt.sign({id:this.id},process.env.secret,{expiresIn:'30d'});
        this.accessToken=token;
    }else
        next(null);
    next(null,this.accessToken)
})


module.exports=mongoose.model('Users',userSchema);