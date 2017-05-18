import React, { Component } from 'react';
import {
    AppRegistry,
    Button,
    Platform,
    ScrollView,
    StyleSheet,
    TouchableHighlight,
    Text,
    View
} from 'react-native';
import {
    DrawerNavigator,StackNavigator
} from 'react-navigation';

import anotherTestScreen from "./containers/anotherTestScreen"
import ScreenRegister from "./containers/Screen1"
import ScreenHome from "./containers/screenHome"


const MainScreenNavigator = DrawerNavigator({
    Recent: {
        screen: ScreenHome
    },
    All: {
        screen: ScreenRegister
    },
});
export default SimpleApp = StackNavigator({
    Home: {
        screen: MainScreenNavigator
    },
    Chat: {
        screen: ScreenHome
    },
    Next: {
        screen: anotherTestScreen
    }
});

