import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, Image, StyleSheet } from 'react-native';

import MicroScreen from './App/MicroScreen';
import NotificationScreen from './App/NotificationScreen';
import SmartScreen from './App/SmartScreen';
import HomeScreen from './App/HomeScreen';
import AddScreen from './App/AddScreen';

import micro from '../../../assets/image/micro.png'
import home from '../../../assets/image/home.png'
import add from '../../../assets/image/users.png'
import notification from '../../../assets/image/alarm1.png'
import smart from '../../../assets/image/app.png'


const Tab = createBottomTabNavigator();

const MainScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
      name="Dashboard" 
      component={HomeScreen} 
      options={{tabBarIcon: () => <Image source={home} style={styles.icon}/>}}
      />
      <Tab.Screen 
      name="Shared"
      component={AddScreen} 
      options={{tabBarIcon: () => <Image source={add} style={styles.icon}/>}}
      />
      <Tab.Screen 
      name = " "
      component={MicroScreen} 
      options={{tabBarIcon: () => <Image source={micro} style={styles.setting}/>}}
      /> 
       <Tab.Screen 
      name="Smart"
      component={SmartScreen} 
      options={{tabBarIcon: () => <Image source={smart} style={styles.icon}/>}}
      />
      <Tab.Screen 
      name= "Notification"
      component={NotificationScreen} 
      options={{tabBarIcon: () => <Image source={notification} style={styles.icon}/>}}
      /> 
      
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  icon:{
    width: 25,
    height: 25,
  },
  setting:{
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: '#3FD2C7',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:  -30,

  }
})

export default MainScreen;
