
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity, Text } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

import ExamOne from './ExamOne'
import ExamTwo from './ExamTwo'
import ScreensStyles from '../styles/screensStyles/ScreensStyles';
import RickAnimes from './RickAnimes';
import { getAuth, onAuthStateChanged } from "firebase/auth";


const Tab = createBottomTabNavigator();

export default function Dashboard({ navigation }) {

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
    } else {
    }
  });
  return (
    <Tab.Navigator       
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Tips') {
            iconName = focused
              ? 'planet-outline'
              : 'planet-outline';
          } else if (route.name === 'Bank Morty') {
            iconName = focused ? 'wallet-outline' : 'wallet-outline';
          }else if (route.name === 'Rick Movies') {
            iconName = focused ? 'play-skip-forward-circle-outline' : 'play-skip-forward-circle-outline';
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
              onPress={() => navigation.navigate('Home')}
              style={ScreensStyles.buttomHeader}
            > 
              <Text style={ScreensStyles.textHeader}>Exit</Text>
            </TouchableOpacity>
          ),
        }} 
      />
      <Tab.Screen
        name="Rick Animes"
        component={RickAnimes}
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
    </Tab.Navigator>
  );
}

