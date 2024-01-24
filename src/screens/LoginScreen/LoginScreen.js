import { View, Text, Image, StyleSheet, useWindowDimensions, TextInput, ScrollView, Alert } from 'react-native';
import React from 'react';
import { useState } from 'react';
import Logo from '../../../assets/image/logo.jpeg'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native'




const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  const onSignInPressed = () => {
// if (!username) {
//   setUsernameError(Alert.alert('Lỗi', 'Vui lòng nhập tài khoản'));
//   return;
// }
// if (!password) {
//   setPasswordError(Alert.alert('Lỗi', 'Vui lòng nhập mật khẩu'));
//   return;
// }
    navigation.navigate('MainHome');
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate('InputEmailComfirm');
  };

  const onSignUpPressed = () => {
    navigation.navigate('SignUp');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, { height: height * 0.3 }]}
          resizeMode="contain"
        ></Image>

        <CustomInput
          placeholder="Tài khoản E-mail"
          value={username}
          setValue={setUsername}
          errorMessage={usernameError}
        />
        <CustomInput
          placeholder="Mật khẩu"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
          errorMessage={passwordError}
        />
        <CustomButton text="Đăng nhập " onPress={onSignInPressed} />
        {<CustomButton
          text="Quên mật khẩu?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />}
        <CustomButton
          text="Bạn chưa có tài khoản? Đăng ký"
          onPress={onSignUpPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root:{
    alignItems: 'center',
    padding: 20,
    flex: 1,
    // backgroundColor: '#AFEEEE',
  },
  logo:{
    marginTop: 60,
    width: '80%',
    maxWidth: 400,
    maxHeight: 300,
    borderRadius: 20,
    marginBottom: 20,
  },
});

export default LoginScreen