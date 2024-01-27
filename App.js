import React from 'react';
import {View,SafeAreaView,Text, StyleSheet} from 'react-native';
import Navigation from './src/navigation';
import AutomationScreen from './src/screens/MainScreen/App/ControlDeviceSceen/AutomationScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
     <Navigation/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root:{
    flex: 1,
    backgroundColor: '#ddd',
  }
})

export default App;
