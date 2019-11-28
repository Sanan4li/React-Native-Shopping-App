import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
  } from 'react-native';
  import { Rating, AirbnbRating } from 'react-native-ratings';  
  import { HeaderButtons , Item } from "react-navigation-header-buttons";
  import MyHeaderButton from "./MyHeaderButton";
  import {connect} from "react-redux";
class ProductsDetailScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
     title : navigation.getParam("title"),
      headerRight : <View style={{flexDirection:"row"}}>
       
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
        
          let id = this.props.navigation.getParam("id");
          let category = this.props.navigation.getParam("category");
          let title = this.props.navigation.getParam("title");
          let Description = this.props.navigation.getParam("Description");
          let Price = this.props.navigation.getParam("Price");
          let rating = Math.floor(parseInt(this.props.navigation.getParam("rating")));
          let image = this.props.navigation.getParam("image");
          return (
              <ScrollView>
             <View style={styles.main}>
            
                 <Image
                  source={{ uri: image }}
                      style={styles.fitImage}
                  />
                  <View style={styles.infoBox}>
                      <Text>Book Title</Text>
                      <Text style={styles.propText}>{title}</Text>
                  </View>
                  <View style={styles.infoBox}>
                      <Text>Written By</Text>
                      <Text style={styles.propText}>{Description}</Text>
                  </View>
                  <View style={styles.infoBox}>
                      <Text>Category</Text>
                      <Text style={styles.propText}>{category}</Text>
                  </View>
                  <View style={styles.infoBox}>
                      <Text>Price</Text>
                      <Text style={styles.propText}>{Price}</Text>
                  </View>
                 <View style={styles.rating}>
                 <Rating
                 
                  startingValue={rating}
                      ratingCount={5}
                      imageSize={40}
                      showRating
              
                  />
                 </View>
                 <TouchableOpacity style={{ 
                justifyContent:"center", 
                alignItems:"center", 
                padding:15 ,
                width:"100%", 
                backgroundColor:"#FF543C",
                borderRadius:3,
               
                marginBottom:20,
                }}>
              <Text style={{color:"white", fontWeight:"bold", fontSize:20}}>Add to Cart</Text>
              </TouchableOpacity>
             </View>
             </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
  main: {
    flex : 1,
    padding : 10,
},
rating : {
    marginTop:10,
    marginBottom:10
},
infoBox: {
   flexDirection:"row", 
   justifyContent:"space-between", borderColor:"gray",
   borderWidth:1,
    padding:10,
    marginTop:15,
        },
fitImage: {
    borderRadius: 5,
    zIndex : -1,
    resizeMode:"contain",
    width:"100%",
    height:430
  },
  fitImageWithSize: {
    height: 100,
    width: 30,
  },
  defaultText:{
    fontSize : 15,
  },
  propText: {
    fontFamily : "halfmoon_bold",
    fontSize : 15,
  }
  });
  
export default ProductsDetailScreen;