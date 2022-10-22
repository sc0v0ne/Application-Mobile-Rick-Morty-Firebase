import React, { useState } from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    ScrollView,
    Alert
  } from 'react-native';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase-config/firebaseconfig';
import { KeyboardAvoidingView } from 'react-native';
import { MotiView } from 'moti'

import ScreensStyles from '../styles/screensStyles/ScreensStyles'

export default function SignUp( { navigation } ) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      Alert.alert('Create Account!')
      const user = userCredential.user;
      console.log(user)
    })
    .catch(error => {
      Alert.alert(error.message)
    })

    } 
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={130}
    >
     <ScrollView>
      <View  style={ScreensStyles.container}>
        <MotiView
            from={{
              scale: 0,
              translateX: -10,
              translateY: -20,
            }}
            animate={{
              scale: 1,
              translateX: 0,
              translateY: 0,
    
            }}
            transition={{
              type: 'spring',
              duration: 10000,
            }}          
          >
            <Image
                style={ScreensStyles.imageRickCrazy}
                source={require('../images/logoRickCrazy.png')}
              /> 
        </MotiView> 
        
        <MotiView
          from={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
  
          }}
          transition={{
            type:'timing',
            duration: 5000,
          }}
        >
        <Text style={ScreensStyles.text}>Sign Up</Text>            
        <Text style={ScreensStyles.textLabel}>Name:</Text>        

          <Text style={ScreensStyles.textLabel}>E-mail:</Text>
          <TextInput
            style={ScreensStyles.input}
            placeholder="ricksanches@mail.com"
            keyboardType='email-address'
            onChangeText={(text) => setEmail(text)}  
          />

          <Text style={ScreensStyles.textLabel}>Password:</Text>
          <TextInput
            style={ScreensStyles.input}
            placeholder="*****"
            keyboardType='default'
            secureTextEntry={true}   
            onChangeText={(text) => setPassword(text)}        
          />
          <TouchableOpacity
            onPress={handleCreateAccount}
            style={ScreensStyles.buttonStyle}
          >           
            <Text style={ScreensStyles.textButton}>Clica Aqui</Text>
          </TouchableOpacity>   
        </MotiView>   
      </View>
    </ScrollView> 
  </KeyboardAvoidingView>
  );
}

