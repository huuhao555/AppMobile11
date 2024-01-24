import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { request, PERMISSIONS } from 'react-native-permissions';
import { AudioRecorderPlayer, AudioUtils } from 'react-native-audio-recorder-player';

const MicroScreen = () => {
  const [isRecording, setRecording] = useState(false);
  const audioRecorderPlayer = new AudioRecorderPlayer();
  const audioPath = AudioUtils.DocumentDirectoryPath + '/test.aac';

  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    try {
      const result = await request(PERMISSIONS.ANDROID.RECORD_AUDIO);
      if (result === 'granted') {
        console.log('Permission granted');
      } else {
        console.log('Permission denied');
      }
    } catch (error) {
      console.error('Error requesting permission:', error);
    }
  };

  const handleToggleRecording = async () => {
    try {
      if (isRecording) {
        // Stop recording
        const result = await audioRecorderPlayer.stopRecorder();
        setRecording(false);
        console.log(result);
      } else {
        // Start recording
        const result = await audioRecorderPlayer.startRecorder(audioPath);
        setRecording(true);
        console.log(result);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={handleToggleRecording}>
        <Text>{isRecording ? 'Stop Recording' : 'Start Recording'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MicroScreen;
