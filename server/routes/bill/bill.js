const Mongoose=require('mongoose');
const Schema=Mongoose.Schema;

const billSchema=new Schema({
    customerName:{
        type:String,
        required:true
    },
    totalAmount:{
        type:Number,
        required:true
    },
    isPaid:{
        type:Boolean,
        required:true,
        default:false
    },
    paidAmount:[{
        amount:{
            type:Number,
            default:0
        },
        date:{
            type:Date,
            require:false,
            default:new Date()
        }
    }],
    remainAmount:{
        type:Number,
        required:false
    },
    items:[{
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
        qty:{
            type:Number,
            require:false,
            default:null
        },
        rate:{
            type:Number,
            required:true,
            trim:true
        },
        weight:[{
            type:Number,
            required:false
        }],
        totalWeight:{
            type:Number,
            required:false,
            default:0
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
    }]
},{timestamps:true});




billSchema.pre('save',function(next){
    let totalPaidAmount=0;
    this.paidAmount.forEach(v => {
        totalPaidAmount+=v.amount
    });
    this.remainAmount=this.totalAmount-totalPaidAmount;
    next(null,this.remainAmount)
})
module.exports=Mongoose.model('Bills',billSchema);
