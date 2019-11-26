import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
   
  } from 'react-native';
  
class WishListScreen extends Component {
    render() {
        return (
           <View style={styles.main}>
               <Text>WishListScreen Screen</Text>
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
  
export default WishListScreen;