import { View }  from 'react-native'
import RickPhrases from '../components/rickPhrases/RickPhrases';
import ScreensStyles from '../styles/screensStyles/ScreensStyles'
import { getAuth, onAuthStateChanged } from "firebase/auth";
export default function ExamOne() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
    } else {
    }
  });
  
  return (
    <View style={ScreensStyles.containerExamOne}>
      <RickPhrases/>
    </View>
  );
}

