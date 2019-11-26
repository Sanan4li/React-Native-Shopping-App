import React from 'react';
import {
  StyleSheet,
  View,
  Text,
 
} from 'react-native';
import AppContainer from "./Navigation/NavigationConfig"
const App = () => {
  return (  
      <AppContainer/>  
  );
};

const styles = StyleSheet.create({
  main:{
    flex:1,
    justifyContent:"center",
    alignItems: "center"
  }
});

export default App;
