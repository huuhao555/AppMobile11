import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { useState } from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native'


const SignUpScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  
  const navigation = useNavigation();
  
  const onRegisterPressed =() =>{
    navigation.navigate('ConfirmEmail')
  
  }
  const onSignInPressed =() =>{
    navigation.navigate('SignIn')
  }
  const onTermsofUsePressed =() =>{
    console.warn("Điều khoản sử dụng");
  }
  const onPrivacyPolicyPressed =() =>{
    console.warn("Chính sách bảo mật");
  }

  return (
  <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
      <Text style={styles.title}>Create an account</Text>

    <CustomInput 
      placeholder="Tên đăng nhập" 
      value={username} 
      setValue={setUsername}
    />
    <CustomInput 
      placeholder="Email" 
      value={email} 
      setValue={setEmail}
    />
    <CustomInput 
      placeholder="Mật khẩu" 
      value={password} 
      setValue={setPassword}
      secureTextEntry={true}
    />
    <CustomInput 
      placeholder="Nhập lại mật khẩu" 
      value={passwordRepeat} 
      setValue={setPasswordRepeat}
      secureTextEntry={true}
    />
    <CustomButton text="Đăng ký" onPress={onRegisterPressed}  />
    <Text style={styles.text}>Bạn hãy xác nhận rằng bạn chấp nhận
      <Text style={styles.link} onPress={onTermsofUsePressed}> Điều khoản sử dụng </Text>và
      <Text style={styles.link} onPress={onPrivacyPolicyPressed}> Chính sách bảo mật</Text> 
    </Text>
    <SocialSignInButtons/>
    <CustomButton
      text="Bạn đã có tài khoản? Đăng nhập" 
      onPress={onSignInPressed} 
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
  },
  
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text:{
    color: "black",
    marginVertical: 10,
  },
  link:{
    color: '#FF8C00'
  },
  
});

export default SignUpScreen