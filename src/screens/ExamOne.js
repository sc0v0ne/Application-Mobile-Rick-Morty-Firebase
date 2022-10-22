import { View }  from 'react-native'
import RickPhrases from '../components/rickPhrases/RickPhrases';
import ScreensStyles from '../styles/screensStyles/ScreensStyles'
import { auth } from '../firebase-config/firebaseconfig';
export default function ExamOne() {
  return (
    <View style={ScreensStyles.containerExamOne}>
      <RickPhrases/>
    </View>
  );
}

