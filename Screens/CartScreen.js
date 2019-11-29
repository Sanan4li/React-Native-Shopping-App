import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
   
  } from 'react-native';
  
class CartScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
     title : "Items in Cart",
    }
  }


    render() {
        return (
           <View style={styles.main}>
               <Text>Cart Screen</Text>
           </View>
        )
    }
}
const styles = StyleSheet.create({
    main:{
      flex:1,
      justifyContent:"center",
      alignItems: "center"
    }
  });
  
export default CartScreen;