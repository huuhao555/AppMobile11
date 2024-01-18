import React, { useState } from 'react';
import { View, SafeAreaView, Switch, StyleSheet, Text, ImageBackground } from 'react-native';
import bgr from './bgr.webp'
import bgr1 from './logo.jpeg'
import bgr2 from '../../../../../assets/image/bgr3.jpg'
import bgr3 from '../../../../../assets/image/bgr3.jpg'

const HomeAppScreen = () => {
  const [isSwitch1Enabled, setSwitch1Enabled] = useState(false);
  const [isSwitch2Enabled, setSwitch2Enabled] = useState(false);

  const toggleSwitch1 = () => setSwitch1Enabled((prevState) => !prevState);
  const toggleSwitch2 = () => setSwitch2Enabled((prevState) => !prevState);

  return (
    <ImageBackground
      source={bgr3} 
      style={styles.backgroundImage}
    >
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.container}>
          <View style={styles.column}>
            <View style={styles.switchContainer}>
              <Switch
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={isSwitch1Enabled ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch1}
                value={isSwitch1Enabled}
              />
              <Text style={styles.switchLabelContainer}>
                <Text style={styles.text}>{isSwitch1Enabled ? 'ON' : 'OFF'}</Text>
                <Text style={styles.switchLabel}>💡</Text>
              </Text>
            </View>
            <View style={styles.switchContainer}>
              <Switch
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={isSwitch2Enabled ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch2}
                value={isSwitch2Enabled}
              />
              <Text style={styles.switchLabelContainer}>
                <Text style={styles.text}>{isSwitch2Enabled ? 'ON' : 'OFF'}</Text>
                <Text style={styles.switchLabel}>❄️</Text>
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    // width: 400,
  },
  safeAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  column: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  switchContainer: {
    backgroundColor: 'rgba(175, 238, 238, 0.7)', // Đặt màu nền với độ trong suốt
    width: 150,
    marginVertical: 10,
    borderRadius: 15,
    padding: 10,
    alignItems: 'center',
  },
  switchLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  switchLabel: {
    fontSize: 44,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    fontStyle: 'normal',
    marginRight: 5,
  },
});

export default HomeAppScreen;
