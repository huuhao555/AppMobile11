import React from 'react';
import {View,SafeAreaView,Text, StyleSheet} from 'react-native';
import Navigation from './src/navigation';
import SpeedControl from './src/components/SpeedControl/SpeedControl';


const App = () => {
  return (
    <SafeAreaView style={styles.root}>
     <SpeedControl/>
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
