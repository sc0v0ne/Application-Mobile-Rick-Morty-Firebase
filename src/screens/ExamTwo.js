import { View } from 'react-native';


import FormAccount from '../components/forms/formAccount/FormAccount';
import ScreensStyles from '../styles/screensStyles/ScreensStyles'
import { auth } from '../firebase-config/firebaseconfig';

export default function ExamTwo() {
  return (
    <View style={ScreensStyles.containerExamTwo}>
      <FormAccount/>
    </View>
  );
}

