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
                  
                    if(state.cartItems[i].id==action.item.id){
                        exists = 1;
                     //   let product = state.cartItems[i];
                   //     let p = product.quantity;
                  //  productWithUpdatedQTY = {...product, p: p+1};
                   // console.log(productWithUpdatedQTY);
                   let count = state.itemsCount + 1;
                   return {
                    ...state,
                    itemsCount : count,
                    cartItems: state.cartItems.map(item => item.id === action.item.id ?
                        // transform the one with a matching id
                        { ...item, quantity: item.quantity+1 } : 
                        // otherwise return original todo
                        item
                    ) ,
                    }





                    // state.cartItems[i].quantity  = state.cartItems[i].quantity+1;
                      //  state.cartItems[i] = = ;
                    //    console.log(state.cartItems);
                       
                      //  console.log(state.cartItems[i].title);
                      //  console.log(state.cartItems[i].quantity);
                     //   console.log(JSON.stringify(productWithUpdatedQTY));
                        //    return {
                        //        ...state,
                              
                               
                              
                        //       } 
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
                console.log(JSON.stringify(updatedCartItems));
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


