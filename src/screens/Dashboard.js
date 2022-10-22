
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity, Text } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

import ExamOne from './ExamOne'
import ExamTwo from './ExamTwo'
import ScreensStyles from '../styles/screensStyles/ScreensStyles';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase-config/firebaseconfig';

const Tab = createBottomTabNavigator();

export default function Dashboard({ navigation }) {

  const exitApp = () => {
    signOut(auth)
    .then(() => {
      Alert.alert('User signed out!')
      console.log('User signed out!')
      navigation.navigate('Home')
    })
    .catch(error => {
      Alert.alert(error.message)
    })

    } 
  return (
    <Tab.Navigator       
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Tips') {
            iconName = focused
              ? 'ear-outline'
              : 'ear-outline';
          } else if (route.name === 'Bank Morty') {
            iconName = focused ? 'home-outline' : 'home-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#013A71',
        tabBarInactiveTintColor: 'gray',
        
        
      })}
    >
      <Tab.Screen 
        name="Tips"
        component={ExamOne}
        options={{ headerShown: true,
          headerTitle: 'Dashboard',
          headerStyle: {
            backgroundColor: '#013A71',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          style: { 
            backgroundColor: '#fff',
            shadowColor: 'transparent',
            shadowRadius: 0,
            shadowOffset: {
                height: 0,
            }
           },
          
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Home')}
              style={ScreensStyles.buttomHeader}
            > 
            <Text style={ScreensStyles.textHeader}>Exit</Text>
            </TouchableOpacity>
          ),
        }} 
      />
      <Tab.Screen
        name="Bank Morty"
        component={ExamTwo}
        options={{ headerShown: true,
          headerTitle: 'Dashboard',
          headerStyle: {
            backgroundColor: '#013A71',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          style: { 
            backgroundColor: '#fff',
            shadowColor: 'transparent',
            shadowRadius: 0,
            shadowOffset: {
                height: 0,
            }
           },
          
          headerRight: () => (
            <TouchableOpacity
              onPress={exitApp}
              style={ScreensStyles.buttomHeader}
            > 
              <Text style={ScreensStyles.textHeader}>Exit</Text>
            </TouchableOpacity>
          ),
        }} 
      />
    </Tab.Navigator>
  );
}

