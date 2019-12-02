import React from 'react';
import { StyleSheet } from 'react-native';
import {createStore, combineReducers} from "redux";
import {Provider} from "react-redux";
import AppContainer from "./Navigation/NavigationConfig"
import ProductsReducers from "./Store/Reducers/ProductsReducers";
import CartReducers from "./Store/Reducers/CartReducers";
const RootReducer = combineReducers({
  products : ProductsReducers,
  cartItems : CartReducers,
  itemsCount : CartReducers ,
  wishListItems : CartReducers

});
const store = createStore(RootReducer);

const App = () => {
 // console.log(store.products);
  return (  
    <Provider store={store}> 
    <AppContainer/>
    </Provider>  
  );
};

const styles = StyleSheet.create({
  main:{
    flex:1,
    justifyContent:"center",
    alignItems: "center"
  }
});

export default App;
