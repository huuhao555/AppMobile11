import React, { useState } from 'react';
import { View, SafeAreaView, Switch, StyleSheet, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const HomeAppScreen = () => {
  const [isEnabled_f, setIsEnabled_f] = useState(false);
  const [isEnabled_s, setIsEnabled_s] = useState(false);

  const toggleSwitch_f = () => setIsEnabled_f((previousState) => !previousState);
  const toggleSwitch_s = () => setIsEnabled_s((previousState) => !previousState);

  return (
    <SafeAreaView>
      <View style={styles.switchContainer}>
        <View style={styles.switchRow}>
          <Text style={styles.switchLabel}>First Switch</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isEnabled_f ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch_f}
            value={isEnabled_f}
          />
        </View>
        <View style={styles.switchRow}>
          <Text style={styles.switchLabel}>Second Switch</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isEnabled_s ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch_s}
            value={isEnabled_s}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  switchContainer: {
    backgroundColor: '#ccc',
    padding: 16,
  },
  switchRow: {
    backgroundColor: 'black',
    fontSize: 30,
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 16,
  },
  switchLabel: {
    marginRight: 16,
    fontSize: 18,
  },
});

export default HomeAppScreen;
