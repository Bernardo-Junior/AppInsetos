import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { 
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';

import Home from './pages/home';
import Sobre from './pages/sobre';

const Tab = createBottomTabNavigator();

export default function Routes() {
    return(
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'Home') {
                            iconName = focused ? 'ios-home' : 'ios-home';
                          }  else {
                            iconName = focused ? 'ios-information-circle-outline' : 'ios-information-circle-outline';
                          }
                          // You can return any component that you like here!
                          return <Ionicons name={iconName} size={25} color={color} />;
                        },
                    })}
                    tabBarOptions={{
                        activeTintColor: '#FFF',
                        inactiveTintColor: '#BFE6B3',
                        style: {
                          backgroundColor: '#7EC24D',
                          height: hp('7%')
                        }
                      }}
            
            >
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Sobre" component={Sobre} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}