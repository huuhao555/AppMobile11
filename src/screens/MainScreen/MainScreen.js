import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './App/HomeScreen';
import Setting from './App/SettingScreen';
import Profile from './App/ProfileScreen';
import { Text } from 'react-native';


const Tab = createBottomTabNavigator();

const MainScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
      name="Home" 
      component={Home} 
      options={{tabBarIcon: () => <Text>🏠</Text>}}
      />
      <Tab.Screen 
      name="Setting" 
      component={Setting} 
      options={{tabBarIcon: () => <Text style={{fontSize:20,}}>⚙️</Text>}}
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
