import React, { Component } from 'react'
import {View, Text , StyleSheet} from "react-native";
import {HeaderButton} from "react-navigation-header-buttons";
import Icon from 'react-native-vector-icons/FontAwesome5';
class MyHeaderButton extends Component {
    render() {
        return (
            <HeaderButton {...this.props} IconComponent={Icon} iconSize={22} 
            color="white" />
        )
    }
}
export default MyHeaderButton;









