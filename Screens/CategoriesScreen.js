import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    Button,
   
  } from 'react-native';

class CategoriesScreen extends Component {
    render() {
        return (
           <View style={styles.main}>
               <Text>Categories Screen</Text>
               <Button title="Go to Products" onPress={()=>{
                   this.props.navigation.navigate("CategoriesProducts");
               }} />
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
  
export default CategoriesScreen;