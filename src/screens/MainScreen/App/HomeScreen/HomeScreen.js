import React, { useState } from 'react';
import { View, SafeAreaView, Image, StyleSheet,Slider, Text } from 'react-native';
import menu from '../../../../../assets/image/menu.png'
import SwitchComponent from '../../../../components/Switch/Switch';



const HomeAppScreen = () => {
  const [isSwitch1Enabled, setSwitch1Enabled] = useState(false);
  const [isSwitch2Enabled, setSwitch2Enabled] = useState(false);
  const [speed, setSpeed] = useState(0); // Tốc độ ban đầuconst Slider = require('@react-native-community/slider').Slider;





  const toggleSwitch1 = () => setSwitch1Enabled(prevState => !prevState);
  const toggleSwitch2 = () => setSwitch2Enabled(prevState => !prevState);

  const onSpeedChange = value => {
    setSpeed(value);
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Image source={menu} style={styles.menu} />
      <View style={styles.container}>
        <View style={styles.row}>
          <SwitchComponent
            value={isSwitch1Enabled}
            onValueChange={toggleSwitch1}
            emoji="💡"
          />
          <SwitchComponent
            value={isSwitch2Enabled}
            onValueChange={toggleSwitch2}
            emoji="❄️"
          />
        </View>
        <View style={styles.speedControlContainer}>
          <Text style={styles.speedText}>Tốc độ: {speed}</Text>
          
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menu: {
    position: 'absolute',
    width: 25,
    height: 25,
    top: 10,
    left: 10,
    padding: 10,
  },
  speedControlContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  speedText: {
    fontSize: 20,
    marginBottom: 20,
  },
  slider: {
    width: 200,
    height: 40,
  },
});

export default HomeAppScreen;
