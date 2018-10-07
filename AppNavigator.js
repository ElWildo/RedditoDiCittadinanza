import React from 'react';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';

import HomeScreen from  './screens/HomeScreen';
import MainOptionsScreen from  './screens/MainOptionScreen';
import StocaScreen from  './screens/StocaScreen';
import CFScreen from  './screens/CFScreen';
import EInveceScreen from  './screens/EInveceScreen';

export default createStackNavigator(
    {
      HomeScreen: HomeScreen,
      MainOptionsScreen: MainOptionsScreen,
      StocaScreen: StocaScreen,
      CFScreen: CFScreen,      
      EInveceScreen: EInveceScreen,      
    },
    {
      initialRouteName: 'HomeScreen',
      navigationOptions: {
        header: null,
        headerStyle: {display:"none"},
        navBarHidden: true
      }
    }
  );