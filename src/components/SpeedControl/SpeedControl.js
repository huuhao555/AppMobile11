import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

const SpeedControl = () => {
  const [speed, setSpeed] = useState(50); // Giá trị ban đầu của tốc độ

  const onSpeedChange = (value) => {
    setSpeed(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.speedText}>Tốc độ: {speed}</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={100}
        step={1}
        value={speed}
        onValueChange={onSpeedChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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

export default SpeedControl;
