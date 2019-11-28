const initialState = {
    cartItems : []
}

export default (state=initialState, action)=>{
    if(action.type=="ADD_TO_CART"){
        let updatedCartItems = [...state.cartItems, action.item];
        console.log(updatedCartItems);
       return {
        ...state,
        cartItems : updatedCartItems 
       } 
    }
    return state
}


