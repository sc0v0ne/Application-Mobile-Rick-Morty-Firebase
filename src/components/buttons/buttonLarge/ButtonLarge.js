import React from 'react'
import { View, Text, TouchableOpacity} from 'react-native'

import styles from './style'

export default function ButtonLarge(props) {
 
  return (
    <View style={styles.viewLargeButton}>    
      
      <TouchableOpacity
        style={styles.largeButton}
        onPress={props.pressFunc}      
      >
        <Text style={styles.textLargeButton}>{props.nameToucha}</Text>
      </TouchableOpacity>
      
    </View>
  );
}