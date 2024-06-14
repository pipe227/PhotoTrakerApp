import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {PhotoProvider} from './store/photo_context';
import AppNavigator from './navigation';

const App = () => {
  return (
    <PhotoProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </PhotoProvider>
  );
};

export default App;
