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
import { NavigationEvents } from 'react-navigation';
import { Rating, AirbnbRating } from 'react-native-ratings';  
import { HeaderButtons , Item } from "react-navigation-header-buttons";
import MyHeaderButton from "./MyHeaderButton";
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements';
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
          <View>
          <Badge value={navigation.getParam("count")} status="primary" 
          containerStyle={{ position: 'absolute',  right: 4 , zIndex:999}}
           />
          <HeaderButtons HeaderButtonComponent={MyHeaderButton}>
           <Item title="Favourtie" iconName="shopping-cart" 
           onPress={()=>{
               console.log("Pressed");
           }}
            style={{marginTop:4}}
            />
         </HeaderButtons>
           
          </View>
          </View>
        };
      };
      state = {
        filteredProducts : [],
        count : -12
      }
  componentDidMount = ()=>{
    let products = this.props.products.products;
    this.setState({
      filteredProducts : products
    });
    let count = this.props.itemsCount.itemsCount;
    console.log(count);
    this.props.navigation.setParams({
      count : count,
    });
    }
    getItemsCount = ()=>{
      this.setState({
        count : this.state.count+1
      },
      ()=>{
        let count = this.props.itemsCount.itemsCount;
      console.log(count);
      this.props.navigation.setParams({
        count : count,
      });
      }
      );
    }
    addCartHandler = (book)=>{
      this.getItemsCount();
      //console.log(this.state.count);
      this.props.addToCart(book);
     
      // this.props.itemsCount.itemsCount
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
                }}
                onPress={()=>{
                  this.addCartHandler(book);
                }}
                >
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
            <NavigationEvents
                onDidFocus={() => {
                  this.getItemsCount()
                }}
                />
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
    products : state.products,
    itemsCount : state.itemsCount,
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    addToCart : (itemData)=>{
      dispatch({
        type : "ADD_TO_CART",
        item : itemData
      });
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(AllProductsScreen);