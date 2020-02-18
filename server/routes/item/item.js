const Mongoose=require('mongoose');
const Schema=Mongoose.Schema;

const itemsSchema=new Schema({
    itemName:{
        type:String,
        required:true,
        trim:true
    },
    weightType:{
        type:String,
        required:true,
        trim:true
    },
    rate:{
        type:Number,
        required:true,
        trim:true
    },
    weight:{
        type:Number
    },
    weightSpec:{
        type:String,
        required:false,
        default:null,
        trim:true
    },
    amount:{
        type:Number,
        required:true,
        trim:true
    }
});

module.exports=Mongoose.model('Items',itemsSchema)