import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../screens/splash_screen';
import MainScreen from '../screens/main_screen';
import PhotoScreen from '../screens/photo_screen';
import CameraScreen from '../screens/camera_screen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={{title: 'Photos'}}
      />
      <Stack.Screen
        name="Photo"
        component={PhotoScreen}
        options={{title: 'Photo'}}
      />
      <Stack.Screen
        name="Camera"
        component={CameraScreen}
        options={{title: 'Take Photo'}}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
