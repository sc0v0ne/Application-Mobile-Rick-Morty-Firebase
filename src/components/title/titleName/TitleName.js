import React, {useState} from 'react'
import { View, Button, Text, Image} from 'react-native'

import styles from './style'

export default function TitleName(props) {
 
  return (
    <View >      
      <Text style={styles.title}>{props.titlename}</Text>
    </View>
  );
}