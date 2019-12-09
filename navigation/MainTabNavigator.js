import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SearchScreen from '../screens/SearchScreen';
import SettingsScreen from '../screens/SettingsScreen';
import SavedScreen from '../screens/SavedScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Home from '../screens/Home';
import AddJournalScreen from '../screens/AddJournalScreen';

// import { Entypo } from '@expo/vector-icons';

const tabNavigator = createBottomTabNavigator({
  Home: {
    screen: Home,
    // navigationOptions: {
    //   tabBarIcon: tabInfo => {
    //     return (
    //       <Entypo name="home" size={25} color={tabInfo.tintColor} />
    //     );
    //   }
    // }
  },
  Search: {
    screen: SearchScreen,
  },
  Add: {
    screen: AddJournalScreen
  },
  Saved: {
    screen: SavedScreen,
  },
  Profile: {
    screen: ProfileScreen,
  },
}, {
  headerMode: 'none'
});

tabNavigator.path = '';

export default tabNavigator;
