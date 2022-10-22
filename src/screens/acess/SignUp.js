import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

import ScreensStyles from '../../styles/screensStyles/ScreensStyles'


import { KeyboardAvoidingView } from 'react-native';
import { MotiView } from 'moti'
export default function SignUp( { navigation } ) {

  const [name, setName] = useState(null)
  const [age, setAge] = useState(null)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  function new_user(){       
    if (name != null &&  age != null && email != null && password != null){
        props.sendForm()
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={130}
    >
     <ScrollView>
      <View  style={styles.container}>
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
                style={styles.imageRickCrazy}
                source={require('../../../../images/logoRickCrazy.png')}
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
        <Text style={styles.text}>Sign Up</Text>            
        <Text style={styles.textLabel}>Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Rick Sanches"
          keyboardType='default'
          value={name}
          onChangeText={setName} 

        />
          <Text style={styles.textLabel}>Age:</Text>
          <TextInput
            style={styles.input}
            placeholder="28"
            keyboardType='numeric'
            maxLength={2}
            value={age}
            onChangeText={setAge} 
          />

          <Text style={styles.textLabel}>E-mail:</Text>
          <TextInput
            style={styles.input}
            placeholder="ricksanches@mail.com"
            keyboardType='email-address'
            value={email}
            onChangeText={setEmail} 
          />

          <Text style={styles.textLabel}>Password:</Text>
          <TextInput
            style={styles.input}
            placeholder="*****"
            keyboardType='default'
            secureTextEntry={true}   
            value={password}
            onChangeText={setPassword}      
          />
          <TouchableOpacity
            onPress={new_user}
            style={styles.buttonStyle}
          >           
            <Text style={styles.textButton}>{props.nameTouch}</Text>
          </TouchableOpacity>   
        </MotiView>   
      </View>
    </ScrollView> 
  </KeyboardAvoidingView>
  );
}

