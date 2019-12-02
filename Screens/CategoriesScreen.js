import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    Button,
    TouchableOpacity,
    FlatList,
    Image
   
  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
class CategoriesScreen extends Component {
  state = {
    categories : [
      {id : "1" , title: "Books", image : "https://image.flaticon.com/icons/png/512/562/562132.png"},
      {id : "2" , title: "Mobiles", image : "https://icon-library.net/images/smartphone-icon-png/smartphone-icon-png-13.jpg"},
      {id : "4" , title: "Watches", image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcHVsPJmUpbX1qe0js7-NLLHWzrJNofP0wrim8dle-Oj5k31CC&s"},
      {id : "5" , title: "Shoes", image : "https://cdn3.iconfinder.com/data/icons/sport-set-1/512/Shoes_2-256.png"},
      {id : "8" , title: "Laptops", image : "https://cdn0.iconfinder.com/data/icons/devices-icons-rounded/110/Laptop-512.png"},
      {id : "9" , title: "T-Shirt", image : "https://cdn2.iconfinder.com/data/icons/mobile-device/512/tshirt-wear-sport-man-blue-round-512.png"},
      {id : "6" , title: "Jewelry", image : "https://www.shareicon.net/data/512x512/2016/09/02/824427_jewel_512x512.png"},
      {id : "7" , title: "Wallets", image : "https://cdn4.iconfinder.com/data/icons/peppyicons-rounded/512/wallet2-512.png"},
     
  ]
  }

  renderItemsFunction = (itemData)=>{
    return (  
        <TouchableOpacity style={styles.item}
              onPress={
            ()=>{
                this.props.navigation.navigate("CategoriesProducts" , {title:itemData.item.title,});
            }
        }>      
            <View>
              <Image source={{uri : itemData.item.image }} style={{width:90, height:90}} />
            </View>
            <Text style={styles.text} numberOfLines={2}> {itemData.item.title} </Text>
       
        </TouchableOpacity>

    )
 }

    render() {
      
        return (
           
          <View style={styles.main}>
          <FlatList style={{marginTop:5}} data={this.state.categories} numColumns={2} 
          renderItem={this.renderItemsFunction} />
        </View>
        )
    }
}

const styles = StyleSheet.create({
  main: {
      flex : 1,
      padding : 5,
      backgroundColor : "#f5f5f0",
       
  },
  item:{
      flex : 1,
              height:180,
              backgroundColor:"white",
              borderRadius : 5,
              shadowColor: "gray",
              shadowOpacity : 0.4,
              shadowOffset : {width:0, height:2},
              shadowRadius : 2,
              elevation : 2,
              justifyContent : "center",
              alignItems : "center",
              padding : 15,
              margin:5
  },
  text : {
      fontSize : 15,
      fontFamily : "halfmoon_bold",
      alignContent : "flex-end",
      marginTop: 10

  },
  
});



export default CategoriesScreen;











