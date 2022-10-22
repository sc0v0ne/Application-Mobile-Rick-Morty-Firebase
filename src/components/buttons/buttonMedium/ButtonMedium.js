import React from 'react'
import { View, Text,  TouchableOpacity} from 'react-native'

import styles from './style'
import { auth } from '../firebase-config/firebaseconfig';
export default function ButtonMedium(props) {
 
  return (
    <View  style={styles.viewMediumButton}>      
      <TouchableOpacity
        style={styles.mediumButton}
        onPress={props.pressFunc}      
      >
        <Text style={styles.textMediumButton}>{props.nameToucha}</Text>
      </TouchableOpacity>
    </View>
  );
}