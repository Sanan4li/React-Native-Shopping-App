const initialState = {
    cartItems : [],
    itemsCount : 0

}
  
export default (state=initialState, action)=>{
    if(action.type=="ADD_TO_CART"){
            let exists = -1;
            if(state.itemsCount>0){
                for(let i=0; i<state.cartItems.length; i++){
                  
                    if(state.cartItems[i].id==action.item.id){
                        exists = 1;
                   return {
                    ...state,
                    cartItems: state.cartItems.map(item => item.id === action.item.id ?
                        { ...item, quantity: item.quantity+1 } : 
                        item
                    ) ,
                    }
                    }
                }
            }
            if(exists==1){
               console.log("if");
               console.log(state.cartItems);
            }
            else{
            let updatedCartItems = [...state.cartItems, action.item];   
            let count = state.itemsCount + 1;
           return {
            ...state,
            itemsCount : count,
            cartItems : updatedCartItems ,
           
           } 
            }
       
    }
    else if(action.type=="DELETE_ITEM"){
        let newCartItems = state.cartItems.filter(
           (item)=>{
            return item.id!=action.item
           }
        );
        let count = state.itemsCount-1;
        return {
            ...state,
            itemsCount : count,
            cartItems : newCartItems ,
           
           } 
        
    }
    else if(action.type=="DECREASE_QUANTITY"){
        return {
            ...state,
            cartItems: state.cartItems.map(item => item.id === action.item ?
                { ...item, quantity: item.quantity-1 } : 
                item
            ) ,
            }
    }
    else if(action.type=="INCREASE_QUANTITY"){
        return {
            ...state,
            cartItems: state.cartItems.map(item => item.id === action.item ?
                { ...item, quantity: item.quantity+1 } : 
                item
            ) ,
            }
    }




    return state
}


