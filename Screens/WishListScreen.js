import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
 TextInput,
 TouchableOpacity,
 FlatList,
 Image,
   
  } from 'react-native';
  import { NavigationEvents } from 'react-navigation';
  import { Rating, AirbnbRating } from 'react-native-ratings';  
  import Fontisto from 'react-native-vector-icons/Fontisto';
  import { Avatar, Badge, Icon, withBadge } from 'react-native-elements';
  import { HeaderButtons , Item } from "react-navigation-header-buttons";
  import MyHeaderButton from "./MyHeaderButton";
  import {connect} from "react-redux";
class WishListScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight : <View style={{flexDirection:"row"}}>

      <View>
      <Badge value={navigation.getParam("count")} status="primary" 
      containerStyle={{ position: 'absolute',  right: 4 , zIndex:999}}
       />
      <HeaderButtons HeaderButtonComponent={MyHeaderButton}>
       <Item title="Favourtie" iconName="shopping-cart" 
       onPress={
        ()=>{
          navigation.navigate("Cart");
         } 
       }
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
    let products = this.props.wishListItems.wishListItems;
    this.setState({
      filteredProducts : products
    });
    }
    getItemsCount = ()=>{
      this.setState({
        count : this.state.count+1
      },
      ()=>{
        let count = this.props.itemsCount.itemsCount;
      this.props.navigation.setParams({
        count : count,
      });
      }
      );
      let products = this.props.wishListItems.wishListItems;
      this.setState({
        filteredProducts : products
      });
      }
    
    
    addCartHandler = (book)=>{
      let qty = 1;
      book.quantity = qty;
       this.props.addToCart(book);
       this.getItemsCount();
       }
    deleteFromCartHandler = (book)=>{
      
         this.props.deleteFromCart(book);
         setTimeout(this.getItemsCount,1000);
         }


  loadBooks = (book)=>{
    let newBook = {
      id : book.item.id,
      title : book.item.title,
      Description : book.item.Description,
      image : book.item.image,
      Price : book.item.Price,
      category : book.item.category,
      rating : book.item.rating,
      favourite: book.item.favourite
    }
    return (
        <TouchableOpacity onPress={
          ()=>{
            this.props.navigation.navigate("ProductDetails", 
            {newBook} );
            
        }
        }>
        <View style={styles.productMain}>
        <View style={{width:"35%", height:200 }}>
        <Image style={{width : "100%" , height:"95%" , resizeMode:"contain" , borderRadius:5}} 
            source={{uri : book.item.image}} />
        </View>
        <View style={{ justifyContent: "space-around", alignContent:"center",  marginLeft:20,}}>
        <View style={{overFlow:"hidden"}}>
           <Text numberOfLines={1} style={styles.text}>{book.item.title}</Text>
             </View>
            <Text style={{color:"#666666"}}>Category : {book.item.category}</Text>
            <Text style={styles.text}>Price : ${book.item.Price}</Text>
            <Rating
                startingValue={ Math.floor(parseInt(book.item.rating))}
                    ratingCount={5}
                    imageSize={25} 
                    style={{alignItems:"flex-start"}}
            
                />
              <View style={{flexDirection:"row"}}>
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
                  this.addCartHandler(newBook);
                  this.deleteFromCartHandler(newBook);
                }}
                >
             <Text style={{color:"#FF543C", fontWeight:"bold"}}>Move to Cart</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{
                  this.deleteFromCartHandler(newBook);
                }}>
              <Fontisto name="trash" size={33} color="#FF543C" style={{marginLeft:10}} />
              </TouchableOpacity>
             </View>
        </View>
            
    </View>
    </TouchableOpacity>
    )

    }

    render() {
      console.log(this.props.wishListItems.wishListItems);
       if(!this.props.wishListItems.wishListItems.length){
       return (
        <View style={{margin:10,alignItems:"center"}}>
          <NavigationEvents
                onDidFocus={() => {
                  this.getItemsCount()
                }}
                />
        <Text>No Item in Wish List!</Text>
      </View>
       )
      
       }
       else{
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
      overflow:"hidden",
      width:"90%",
  }
});

const mapStateToProps = (state)=>{
  return {
    wishListItems : state.wishListItems,
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
    },
    addToWishList : (itemData)=>{
      dispatch({
        type : "ADD_TO_WISH_LIST",
        item : itemData
      });
    },
    deleteFromCart : (itemData)=>{
      dispatch({
        type : "DELETE_FROM_CART",
        item : itemData
      });
    }

  }
}



export default connect(mapStateToProps,mapDispatchToProps)(WishListScreen);