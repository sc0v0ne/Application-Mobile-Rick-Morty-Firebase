import { View } from 'react-native';


import FormAccount from '../components/forms/formAccount/FormAccount';
import ScreensStyles from '../styles/screensStyles/ScreensStyles'


export default function ExamTwo() {
  return (
    <View style={ScreensStyles.containerExamTwo}>
      <FormAccount/>
    </View>
  );
}

