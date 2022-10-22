import { View } from 'react-native';

import ScreensStyles from '../styles/screensStyles/ScreensStyles'
import LoginForm from '../components/appEntry/login/Login';
import { auth } from '../firebase-config/firebaseconfig';
export default function Login({navigation}) {
  return (
    <View style={ScreensStyles.containerLogin}>          
        <View>
          <LoginForm
              sendForm = {() => navigation.navigate('Dashboard')}
              nameTouch = 'Login'  
          />  
        </View>         
    </View>
  );
}

