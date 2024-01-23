import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './App/HomeScreen';
import Setting from './App/SettingScreen';
import Profile from './App/ProfileScreen';
import { Text, Image } from 'react-native';
import micro from '../../../assets/image/micro.png'
import home from '../../../assets/image/home.png'


const Tab = createBottomTabNavigator();

const MainScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
      name="Dashboard" 
      component={Home} 
      options={{tabBarIcon: () => <Image source={home} style={{width: 25, height: 25}}/>}}
      />
      <Tab.Screen 
      name="Home" 
      component={Setting} 
      options={{tabBarIcon: () => <Image source={micro} style={{width: 25, height: 25}}/>}}
      />
      
      <Tab.Screen 
      name="Profile" 
      component={Profile} 
      options={{tabBarIcon: () => <Text style={{fontSize: 15,}}>👤</Text>}}
      />
    </Tab.Navigator>
  );
};

export default MainScreen;
