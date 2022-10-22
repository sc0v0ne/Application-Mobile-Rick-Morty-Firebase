import React from 'react';
import { 
  View,
  TextInput,
} from 'react-native';

import styles from './style'

export default function InputInfo(props) {
  return (
    <View>
        <TextInput
            style={styles.inputText}
            placeholder={props.placeHolderName}
            keyboardType={props.keyType}
        />
    </View>
  );
}
