const initialState = {
    cartItems : [],
    itemsCount : 0

}

export default (state=initialState, action)=>{
    if(action.type=="ADD_TO_CART"){
        let updatedCartItems = [...state.cartItems, action.item];
        let count = state.itemsCount + 1;
         console.log(updatedCartItems);
         console.log(count);
      // console.log(state.itemsCount);
       return {
        ...state,
        itemsCount : count,
        cartItems : updatedCartItems ,
       
       } 
    }
    return state
}


