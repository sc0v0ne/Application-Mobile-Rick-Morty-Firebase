import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Dashboard from '../screens/Dashboard';
import Home from '../screens/Home';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';

const Stack = createNativeStackNavigator();

export default function RouteStack() {
  return (    
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }} 
            />
            <Stack.Screen
                name="Dashboard"
                component={Dashboard}
                options={{ headerShown: false }} 
            />
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ title: 'Back',
                headerStyle: {
                    backgroundColor: '#97C44B',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                  headerMode: 'none',
                cardStyle: { shadowColor: 'transparent' },
             }}
            /> 
            <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{ title: 'Back',
                headerStyle: {
                    backgroundColor: '#97C44B',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                  headerMode: 'none',
                cardStyle: { shadowColor: 'transparent' },
            }}
            />             
        </Stack.Navigator>
      </NavigationContainer>

  );
}

