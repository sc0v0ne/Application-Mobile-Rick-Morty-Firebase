import { View } from 'react-native'; 

import ScreensStyles from '../styles/screensStyles/ScreensStyles'
import SignUpForm from '../components/appEntry/signUp/SignUp';

export default function SignUp( { navigation } ) {
  return (
    <View style={ScreensStyles.containerSignUp}>        
        <SignUpForm
          sendForm = {() => navigation.navigate('Dashboard')}
          nameTouch = 'Sign Up'          
        />              
    </View>
  );
}

