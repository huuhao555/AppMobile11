import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen from '../screens/SignInScreen'
import SignUpScreen from '../screens/SignUpScreen'
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen/ConfirmEmailScreen'
import LoginScreen from '../screens/LoginScreen'
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen'
import NewPasswordScreen from '../screens/NewPasswordScreen'
import HomeAppScreen from '../screens/HomeAppScreen';
import InputEmailComfirmScreen from '../screens/InputEmailComfirmScreen';

import MainScreen from '../screens/MainScreen';

 
const Stack = createNativeStackNavigator();
const Navigation = ({ navigation }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator   screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen}/>
        <Stack.Screen name="SignUp" component={SignUpScreen}/>
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen}/>
        <Stack.Screen name="NewPassword" component={NewPasswordScreen}/>
        <Stack.Screen name="HomeApp" component={HomeAppScreen}/>
        <Stack.Screen name="InputEmailComfirm" component={InputEmailComfirmScreen}/>
        <Stack.Screen name="MainHome" component={MainScreen}/>
       
      
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;
