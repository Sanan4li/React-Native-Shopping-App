import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
   
  } from 'react-native';
    
class ProductsDetailScreen extends Component {
    render() {
        return (
           <View style={styles.main}>
               <Text>Product Details Screen</Text>
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
  
export default ProductsDetailScreen;