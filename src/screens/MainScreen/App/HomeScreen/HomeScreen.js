import React, { useState } from 'react';
import { View, SafeAreaView,Image, StyleSheet, Text, ImageBackground } from 'react-native';
import menu from '../../../../../assets/image/menu.png'

import SwitchComponent from '../../../../components/Switch/Switch';




const HomeAppScreen = () => {
  const [isSwitch1Enabled, setSwitch1Enabled] = useState(false);
  const [isSwitch2Enabled, setSwitch2Enabled] = useState(false);

  const toggleSwitch1 = () => setSwitch1Enabled((prevState) => !prevState);                             
  const toggleSwitch2 = () => setSwitch2Enabled((prevState) => !prevState);

  return (
    
      <SafeAreaView style={styles.safeAreaView}>
        <Image source={menu} style={styles.menu}/>
        <View style={styles.container}>
        <View style={styles.row}>
            <SwitchComponent
              label="💡"
              value={isSwitch1Enabled}
              onValueChange={toggleSwitch1}
              emoji="💡"
            />
            <SwitchComponent
              label="❄️"
              value={isSwitch2Enabled}
              onValueChange={toggleSwitch2}
              emoji="❄️"
            />
          </View>
         
        </View>
      </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  safeAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  menu:{
    position: 'absolute',
    width: 25,
    height: 25,
    top: 10,
    left: 5,
    padding: 10,
  }
});
export default HomeAppScreen;