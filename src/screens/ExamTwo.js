import { View } from 'react-native';
import FormAccount from '../components/forms/formAccount/FormAccount';
import ScreensStyles from '../styles/screensStyles/ScreensStyles'
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function ExamTwo() {

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
  } else {
  }
  });
  return (
    <View style={ScreensStyles.containerExamTwo}>
      <FormAccount/>
    </View>
  );
}

