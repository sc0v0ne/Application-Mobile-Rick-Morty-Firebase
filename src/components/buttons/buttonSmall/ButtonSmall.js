import React from 'react'
import { View, Text, TouchableOpacity} from 'react-native'

import styles from './style'
import { auth } from '../firebase-config/firebaseconfig';
export default function ButtonSmall(props) {
 
  return (
    <View style={styles.viewSmallButton}>    
      
      <TouchableOpacity
        style={styles.smallButton}
        onPress={props.pressFunc}      
      >
        <Text style={styles.textSmallButton}>{props.nameToucha}</Text>
      </TouchableOpacity>
      
    </View>
  );
}