import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Container, Message} from './styles';

const SplashScreen: React.FC = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('Main');
    }, 1000);

    return () => clearTimeout(timeout);
  }, [navigation]);

  const handlePress = () => {
    navigation.navigate('Main');
  };

  return (
    <Container onPress={handlePress}>
      <Message>¡Bienvenido!</Message>
    </Container>
  );
};

export default SplashScreen;
