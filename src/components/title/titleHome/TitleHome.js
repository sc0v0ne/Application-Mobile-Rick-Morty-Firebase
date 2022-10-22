import React, {useState} from 'react'
import { View, Button, Text, Image} from 'react-native'

import styles from './style'

export default function TitleHome(props) {
 
  return (
    <View >      
      <Text style={styles.title}>{props.titlehome}</Text>
    </View>
  );
}