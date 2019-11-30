import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
   FlatList
  } from 'react-native';
  import { Rating, AirbnbRating } from 'react-native-ratings';  
  import { HeaderButtons , Item } from "react-navigation-header-buttons";
  import MyHeaderButton from "./MyHeaderButton";
  import { Avatar, Badge, Icon, withBadge } from 'react-native-elements';
  import { NavigationEvents } from 'react-navigation';
  import {connect} from "react-redux";
class CartScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
     title : "Items in Cart",
    }
  }
  state = {
    itemsInCart : null
  }
 
  componentDidMount = ()=>{
    let Items = this.props.cartItems.cartItems.map(
      (item)=>{
        return item.item
      }
    )
    this.setState({
      itemsInCart : Items
    })
  }
  loadBooks = (book)=>{
                   
    return (
        <View style={{flexDirection:"row"}}>
          <Text>{book.item.title}</Text>
          <Text style={{marginLeft:20}}>{book.item.quantity}</Text>
        </View>
      )
  }
    render() {
      console.log(this.state.itemsInCart);
        return (
           <View style={styles.main}>
             
               <FlatList data={this.state.itemsInCart} renderItem={
              this.loadBooks
              }
           />
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
  
  const mapStateToProps = (state)=>{
    return {
      cartItems : state.cartItems,
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
export default connect(mapStateToProps)(CartScreen);