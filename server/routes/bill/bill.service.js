module.exports={
    calculateAmount:async function calculate(items){
        for (let index = 0; index < items.length; index++) {
            const{weightType,qty,rate,weight}=items[index];
        try {
            if(rate){
                if(weightType==='perkg' && weight){
                    items[index].amount=parseFloat(weight[0]*rate)                    
                }else if(weightType==='manual'){
                   const totalWeight= items[index].weight.reduce((a,c)=>a+=c);
                   items[index].totalWeight=totalWeight;
                   items[index].amount=parseFloat(totalWeight*items[index].rate);
                }else if(weightType==='fixed' && qty){
                    items[index].amount=items[index].rate* (items[index].weight[0]*items[index].qty);
                }else{
                    items[index].amount=items[index].rate* items[index].qty;
                }
            }else{
                throw new Error('Rate is empty');
            }
        } catch (error) {
            return error
        }
            
        }
       return items;
        
    },
    finalbill:async function finalbill(customer,items){
        var bill={};
        if(customer.customerName)
            bill.customerName=customer.customerName;
        customer.isPaid?bill.isPaid=true:bill.isPaid=false;
        bill.totalAmount=0;
         items.forEach(item => {
             bill.totalAmount+=item.amount
         });
         bill.paidAmount=[];
         const totalPaid=customer.paidAmount.reduce((a,c)=>a+=c)
         customer.paidAmount?bill.paidAmount.push({amount:totalPaid}):0
         bill.items=items;
        return bill;
    },
    updateBill:async function updateBill(payload,bill){
        if(payload.amount){
        //     console.log(bill.paidAmount[0].amount)
        //    const totalPaid=bill.paidAmount.reduce((a,c)=>{
        //        return a+c
        //    });
           bill.remainAmount=bill.totalAmount-totalPaid;

           return bill
        }
        
    }
}