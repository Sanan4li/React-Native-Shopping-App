import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
   
  } from 'react-native';
    
class OrdersScreen extends Component {
    render() {
        return (
           <View style={styles.main}>
               <Text>Orders Screen</Text>
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
  
export default OrdersScreen;