const initialState = {
    cartItems : [],
    itemsCount : 0

}
  
export default (state=initialState, action)=>{
    if(action.type=="ADD_TO_CART"){
        let productWithUpdatedQTY = null;
        let index = -1;
            let exists = -1;
            if(state.itemsCount>0){
                for(let i=0; i<state.cartItems.length; i++){
                    console.log(state.cartItems)
                    if(state.cartItems[i].item.id==action.item["item"].id){
                        exists = 1;
                   //     let product = state.cartItems[i];
                   //     let p = product.item;
                    //productWithUpdatedQTY = {...product, quantity: product.quantity+1};
                   // console.log(productWithUpdatedQTY);
                   state.cartItems[i].item.quantity  = state.cartItems[i].item.quantity+1;
                      //  state.cartItems[i] = = ;
                        let count = state.itemsCount + 1;
                       
                           return {
                               ...state,
                               itemsCount : count,
                               
                              
                              } 
                    break;
                        
                    }
                }
            }
            if(exists==1){
               console.log("if");
               console.log(state.cartItems);
            }
            else{
                console.log("else");
                let updatedCartItems = [...state.cartItems, action.item];
                console.log(updatedCartItems);
            let count = state.itemsCount + 1;
           return {
            ...state,
            itemsCount : count,
            cartItems : updatedCartItems ,
           
           } 
            }
            
        
            

    



       
    }
    return state
}


