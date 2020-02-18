module.exports={
    calculateAmount:async function calculate(item){
        const{weightType,qty,rate,weight}=item;
        try {
            if(rate){
                if(weightType==='perkg' && weight){
                    item.amount=parseFloat(weight*rate)
                    return item
                }
            }else{
                throw new Error('Rate is empty');
            }
        } catch (error) {
            return error
        }
       
        
    }
}