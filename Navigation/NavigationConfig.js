import React from "react";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import CategoriesScreen from "../Screens/CategoriesScreen";
import AllProductsScreen from "../Screens/AllProductsScreen";
import WishListScreen from "../Screens/WishListScreen";
import CartScreen from "../Screens/CartScreen";
import CategoriesProductsScreen from "../Screens/CategoriesProductsScreen";
import ProductsDetailScreen from "../Screens/ProductsDetailScreen";
import OrdersScreen from "../Screens/OrdersScreen";
const defaultOptionsForStack =  {
    defaultNavigationOptions: {
       
    headerStyle: {
        backgroundColor: '#FF543C',
        elevation: 0,
        shadowOpacity: 0
    },
    headerTintColor: '#FFFFFF',
    headerTitleStyle: {
        fontWeight: 'bold',
        color: '#FFFFFF'
    }
}   
      
  };

   const CategoriesStack = createStackNavigator({
      Categories : {
          screen : CategoriesScreen,
          navigationOptions : {
            headerTitle : " Categories"
        }
      },
      CategoriesProducts : {
          screen : CategoriesProductsScreen,
          navigationOptions : {
            headerTitle : "Details"
        }
      },
       ProductDetails : {
        screen : ProductsDetailScreen, 
        navigationOptions : {
            headerTitle : "Products Details"
        }
    },
        Orders : {
        screen : OrdersScreen
    }

  }, defaultOptionsForStack
  
  );     

  const AllProductsStack = createStackNavigator({
   
    AllProducts : {
        screen : AllProductsScreen,
        navigationOptions : {
          headerTitle : "All Products"
      }
    },
     ProductDetails : {
      screen : ProductsDetailScreen, 
      navigationOptions : {
          headerTitle : "Products Details"
      }
  },
      Orders : {
      screen : OrdersScreen
  }

}, defaultOptionsForStack

);     


const WishListStack = createStackNavigator({
   
    WishList : {
        screen : WishListScreen,
        navigationOptions : {
          headerTitle : "Wish List"
      }
    },
     ProductDetails : {
      screen : ProductsDetailScreen, 
      navigationOptions : {
          headerTitle : "Products Details"
      }
  },
      Orders : {
      screen : OrdersScreen
  }

}, defaultOptionsForStack

);     


const CartStack = createStackNavigator({
   
    Orders : {
        screen : OrdersScreen,
        navigationOptions : {
            headerTitle : "Items in Cart"
        }
    },
     WishList : {
      screen : WishListScreen, 
  },
      

}, defaultOptionsForStack

);     





  const TabNavigator = createBottomTabNavigator({
    Categories: {
        screen :  CategoriesStack,
        navigationOptions : {
            tabBarIcon: ({ tintColor }) => {
             return   <FontAwesome name="th" size={25} color={tintColor} />
            }
                
            },
        
        
    },
    Products : {
        screen : AllProductsStack,
        navigationOptions : {
            tabBarIcon: ({ tintColor }) => {
                return   <Icon name="tshirt" size={25} color={tintColor} />
               }
        }
    },   
    "Wish List": {
    screen :  WishListStack,
        navigationOptions : {
            tabBarIcon: ({ tintColor }) => { 
                return   <Fontisto name="heart" size={25} color={tintColor} />
               }
    }
    },   
    Cart: {
        screen :  CartStack,
            navigationOptions : {
                tabBarIcon: ({ tintColor }) => {
                    return   <Icon name="shopping-cart" size={25} color={tintColor} />
                   }
        }
        },
  }, {
      tabBarOptions : {
        showLabel : false,
          activeTintColor : "#FF543C",
          inactiveTintColor : "black",
          tabStyle : {height : 50 , zIndex:99, borderColor:"white", borderTopWidth:0},
          labelStyle : {fontSize: 12, paddingTop:2,paddingBottom:3, fontFamily : "halfmoon_bold",},
      }
  }
  
  
  );



const AppContainer = createAppContainer(TabNavigator)

export default AppContainer ;











