import React from 'react';
import {useRoute} from '@react-navigation/native';
import Share from 'react-native-share';
import {
  Container,
  FullImage,
  LocationTextContainer,
  LocationText,
  ShareButton,
  ShareButtonText,
} from './styles';

const PhotoScreen: React.FC = () => {
  const route = useRoute();
  const {photo} = route.params;

  const sharePhoto = () => {
    const shareOptions = {
      title: 'Compartir foto',
      message: `Mira esta foto que tomé! \nLatitud: ${photo.location.latitude}, Longitud: ${photo.location.longitude}, \nAltitud: ${photo.location.altitude}m, Precisión: ${photo.location.accuracy}m, \nVelocidad: ${photo.location.speed}m/s, Dirección: ${photo.location.heading}°`,
      url: `file://${photo.uri}`,
    };
    Share.open(shareOptions)
      .then(res => console.log(res))
      .catch(err => {
        err && console.log(err);
      });
  };

  return (
    <Container>
      <FullImage source={{uri: photo.uri}} />
      <LocationTextContainer>
        <LocationText>{`Lat: ${photo.location.latitude}, Lon: ${photo.location.longitude}`}</LocationText>
        <LocationText>{`Altitud: ${photo.location.altitude}m, Precisión: ${photo.location.accuracy}m`}</LocationText>
        <LocationText>{`Velocidad: ${photo.location.speed}m/s, Dirección: ${photo.location.heading}°`}</LocationText>
      </LocationTextContainer>
      <ShareButton onPress={sharePhoto}>
        <ShareButtonText>Compartir Foto</ShareButtonText>
      </ShareButton>
    </Container>
  );
};

export default PhotoScreen;
