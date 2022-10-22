import { View } from 'react-native';
import { MotiView } from 'moti';

import ButtonSmall from '../components/buttons/buttonSmall/ButtonSmall';
import ImageHome from '../components/imageComponents/imageHome/ImageHome';
import ScreensStyles from '../styles/screensStyles/ScreensStyles'
import { auth } from '../firebase-config/firebaseconfig';
export default function Home({navigation}) {
  return (
    <View style={ScreensStyles.containerHome}>  
      <MotiView
        from={{
          opacity: 0,
          rotate: '230deg',
        }}
        animate={{
          rotate: '0deg',
          opacity: 1,

        }}
        transition={{
          type:'timing',
          duration: 2000,
        }}
      >
        <ImageHome
          
          /> 
      </MotiView>

      <MotiView
        from={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,

        }}
        transition={{
          type:'timing',
          duration: 5000,
        }}
        
      >
        <ButtonSmall
          style={ScreensStyles.containerHome}          
          pressFunc = {() => navigation.navigate('Login')}
          nameToucha = 'Login'      
        />
        <ButtonSmall
          style={ScreensStyles.containerHome}          
          pressFunc = {() => navigation.navigate('SignUp')}
          nameToucha = 'Sign Up'      
        />
      </MotiView>    
      
    </View>
  );
}

