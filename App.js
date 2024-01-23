import React from 'react';
import {View,SafeAreaView,Text, StyleSheet} from 'react-native';
import Navigation from './src/navigation';

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
    // backgroundColor: '#AFEEEE',
  }
})

export default App;
