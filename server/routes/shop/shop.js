const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const ShopSchema=new Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    place:{
        type:String,
        required:true,
        trim:true
    },
    phone:{
        required:true,
        trim:true,
        type:String
    },
    ownerId:[{
        type:Schema.Types.ObjectId,
        ref:'Users'
    }]
},{timestamps:true})



module.exports=mongoose.model('Shops',ShopSchema);