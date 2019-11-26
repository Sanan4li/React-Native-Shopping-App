import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    TextInput,
  } from 'react-native';
import { HeaderButtons , Item } from "react-navigation-header-buttons";
import MyHeaderButton from "./MyHeaderButton";
 class AllProductsScreen extends Component { 
      static navigationOptions = ({ navigation }) => {
        return {
          headerRight : <View style={{flexDirection:"row"}}>
             <View style={{
                 width: 200,
                 borderColor:"white",
                 borderRadius:5,
                 borderWidth:1,
                 backgroundColor:"white"
             }}>
             <TextInput placeholder="Search..." style={{padding:5}} />
             </View>
              <HeaderButtons HeaderButtonComponent={MyHeaderButton}>
                <Item title="Favourtie" iconName="search" 
                onPress={()=>{
                    console.log("Pressed");
                }}
                />
          </HeaderButtons>
           
           <HeaderButtons HeaderButtonComponent={MyHeaderButton}>
           <Item title="Favourtie" iconName="shopping-cart" 
           onPress={()=>{
               console.log("Pressed");
           }}
           />
     </HeaderButtons>
          </View>
        };
      };
    render() {
        return (
           <View style={styles.main}>
               <Text>All Products Screen</Text>
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
  
export default AllProductsScreen;