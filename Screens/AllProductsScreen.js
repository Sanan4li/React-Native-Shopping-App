import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
 TextInput,
 TouchableOpacity,
 FlatList,
 Image,
 Button

} from 'react-native'; 
import { Rating, AirbnbRating } from 'react-native-ratings';  
import { HeaderButtons , Item } from "react-navigation-header-buttons";
import MyHeaderButton from "./MyHeaderButton";
import {connect} from "react-redux";
 class AllProductsScreen extends Component { 
      static navigationOptions = ({ navigation }) => {
        return {
          headerRight : <View style={{flexDirection:"row"}}>
             <View style={{
                 width: 200,
                 borderColor:"white",
                 borderRadius:3,
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
      state = {
        filteredProducts : []
      }
  componentDidMount = ()=>{
    let products = this.props.products.products;
    console.log(products);
    this.setState({
      filteredProducts : products
    });
  }

  loadBooks = (book)=>{
                   
    return (
        <TouchableOpacity onPress={
          ()=>{
            this.props.navigation.navigate("ProductDetails", 
            {
                id : book.item.id,
                category : book.item.category,
                title:book.item.title,
                Description:book.item.Description,
                Price: book.item.Price,
                rating: book.item.rating,
                image : book.item.image

            });
        }
        }>
        <View style={styles.productMain}>
        <View style={{width:"35%", height:200 }}>
        <Image style={{width : "100%" , height:"95%" , resizeMode:"contain" , borderRadius:5}} 
            source={{uri : book.item.image}} />
        </View>
        <View style={{ justifyContent: "space-around", alignContent:"center",  marginLeft:20,}}>
            <Text style={styles.text}>{book.item.title}</Text>
            <Text style={{color:"#666666"}}>Category : {book.item.category}</Text>
            <Text style={styles.text}>Price : ${book.item.Price}</Text>
            <Rating
                startingValue={ Math.floor(parseInt(book.item.rating))}
                    ratingCount={5}
                    imageSize={25} 
                    style={{alignItems:"flex-start"}}
            
                />
              <TouchableOpacity style={{ 
                justifyContent:"center", 
                alignItems:"center", 
                padding:10 ,
                width:135, 
                backgroundColor:"white",
                borderRadius:3,
                borderColor: "#FF543C",
                borderWidth:1,
                }}>
              <Text style={{color:"#FF543C", fontWeight:"bold"}}>Add to Cart</Text>
              </TouchableOpacity>
        </View>
            
    </View>
    </TouchableOpacity>
    )

    }
  



    render() {
        return (
          <View style={styles.main}>
          <FlatList data={this.state.filteredProducts} renderItem={
              this.loadBooks
              }
           />
         </View>
        )
    }
}

const styles = StyleSheet.create({
  main: {
      flex : 1,
      padding : 10,
     
  },
  bookMain :{
      marginTop:10,
      width : "100%",
      height:500,
     
      borderColor:"black" , borderWidth:1,
      borderRadius : 5
  },
  productMain: {
    flexDirection:"row", 
    justifyContent:"flex-start", 
    borderBottomColor:"gray",
    borderBottomWidth:1,
    marginBottom:5
  
      
  },
  text : {
      color:"black",
      fontFamily : "halfmoon_bold",
      fontSize: 15,
      fontWeight:"bold",
  }
});


  
const mapStateToProps = (state)=>{
  return {
    products : state.products
  }
}
  
export default connect(mapStateToProps)(AllProductsScreen);