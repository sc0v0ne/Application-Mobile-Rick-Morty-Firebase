import React, { useState } from 'react';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { KeyboardAvoidingView } from 'react-native';

import { 
  Text,
  View,
  Alert,
  Switch,
  ScrollView,
  TextInput,
} from 'react-native';
import {MotiView} from 'moti'
import styles from './style'
import ButtonLarge from '../../buttons/buttonLarge/ButtonLarge';


export default function FormAccount() {

  const [name, setName] = useState(null);
  const [age, setAge] = useState(null);
  const [selectedGender, setSelectedGender] = useState(null);
  const [limitAccount, setLimitAccount] = useState(0);  
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const showAlert = (name, age, selectedGender, limitAccount, enable) =>
    Alert.alert(
      "Confirm your data",
          'Nome: ' + name + '\n' +
          'Age: ' + age + '\n' + 
          'Gender: ' + selectedGender + '\n' +
          'Limit: $' + parseFloat(limitAccount).toFixed(2) + '\n' +
          'Alien: ' + enable,
      [
        {
          text: "Confirm",
          onPress: () => Alert.alert("Thanks Open Account"),
          style: "cancel",
        },
        {
          text: "Cancel",
          onPress: () =>  resetOpenAccount(),
          style: "cancel",
        },
      ]    
  );

  function validetionFormOpenAccount(){
      if (name != null && age != null &&  selectedGender != null && limitAccount != 0){
            showAlert(name, age, selectedGender, limitAccount, isEnabled)
      }else{
          Alert.alert('You must fill in all missing fields')
      }
  }
  function resetOpenAccount(){
      setName(null)
      setAge(null)
      setSelectedGender(null)
      setLimitAccount(0)
      setIsEnabled(false)
  }

  return (    
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={130}
    >
     <ScrollView>
      <View style={styles.container}>
            <MotiView
                from={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1
        
                }}
                transition={{
                  type: 'timing',
                  duration: 2000,
                }}
              >
              <Text style={styles.title}>Bank Morty</Text>   
            </MotiView>
            <View>

              <Text style={styles.titleInputs}>Name:</Text>
              <TextInput
                value={name}
                onChangeText={setName}            
                style={styles.inputText}
                placeholder="Digit your name"          
              />

              <Text style={styles.titleInputs}>Age:</Text>
              <TextInput
                value={age}
                maxLength={2}
                keyboardType="numeric"
                onChangeText={setAge}            
                style={styles.inputText}
                placeholder="Digit your age"          
              /> 
          </View>       
            
            <View >
              <Text style={styles.titleInputs}>Gender:</Text>
              <Picker
                style={styles.picker}
                selectedValue={selectedGender}
                onValueChange={(itemValue, itemIndex) => setSelectedGender(itemValue)              
              }>
                <Picker.Item
                  style={styles.pickerItem}
                  label="Clone Mr. Meeseeks"
                  value="lone Mr. Meeseeks" />
                <Picker.Item 
                  style={styles.pickerItem}
                  label="Morty Jr."
                  value="Morty Jr." />
                  <Picker.Item 
                  style={styles.pickerItem}
                  label="Cronenbergs"
                  value="Cronenbergs" />
                  <Picker.Item 
                  style={styles.pickerItem}
                  label="Strange: Fart"
                  value="Strange: Fart" />
                  <Picker.Item 
                  style={styles.pickerItem}
                  label="Cromulons"
                  value="Cromulons" />
              </Picker>
            </View >

            <View >
                <Text style={styles.titleInputs}>Your Limit: R$ {parseFloat(limitAccount).toFixed(2)}</Text>
                <Slider
                  style={styles.slider}
                  minimumValue={0.00}
                  maximumValue={1000.00}
                  onValueChange={setLimitAccount}
                  minimumTrackTintColor="#F7EA46"
                  maximumTrackTintColor="#fff"
                />
            </View>

            <View >
              <Text style={styles.titleInputs}>Alien:</Text>
              <Switch
                style={styles.switch}
                trackColor={{ false: "#767577", true: "#9CB4CC" }}
                thumbColor={isEnabled ? "#F7EA46" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
            
            <View >            
              <ButtonLarge
                pressFunc = {() => {validetionFormOpenAccount()}}
                nameToucha = 'Open Account'
              
              /> 
              <ButtonLarge
                pressFunc = {() => {resetOpenAccount()}}
                nameToucha = 'Reset Values'
              
              />             
            </View>                
      </View>
     </ScrollView>
    </KeyboardAvoidingView>
  );
}


