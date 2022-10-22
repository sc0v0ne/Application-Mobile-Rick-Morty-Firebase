import React from 'react'
import { View, Image} from 'react-native'

import styles from './style'
import { auth } from '../firebase-config/firebaseconfig';
export default function ImageHome() {
 
  return (
    <View>
        <Image
            style={styles.imageStyle}
            source={require('../../../images/portal.png')}
        />   
    </View>
  );
}