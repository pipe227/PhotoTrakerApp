import React, {useState, useEffect, useRef} from 'react';
import {Alert, Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Geolocation from 'react-native-geolocation-service';
import {Camera, useCameraDevice} from 'react-native-vision-camera';
import {PERMISSIONS, request, RESULTS} from 'react-native-permissions';
import {usePhoto} from '../../store/photo_context';
import {CenteredView, Container, Message} from './styles';
import CustomButton from '../../components/button_component';

const CameraScreen: React.FC = () => {
  const navigation = useNavigation();
  const [hasCameraPermission, setHasCameraPermission] = useState(false);
  const [hasLocationPermission, setHasLocationPermission] = useState(false);
  const [photoUri, setPhotoUri] = useState('');
  const device = useCameraDevice('back');
  const cameraRef = useRef(null);

  useEffect(() => {
    requestPermissions();
  }, []);

  const requestPermissions = async () => {
    let cameraStatus;
    let locationStatus;

    if (Platform.OS === 'android') {
      cameraStatus = await request(PERMISSIONS.ANDROID.CAMERA);
      locationStatus = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    } else if (Platform.OS === 'ios') {
      cameraStatus = await request(PERMISSIONS.IOS.CAMERA);
      locationStatus = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    }

    setHasCameraPermission(cameraStatus === RESULTS.GRANTED);
    setHasLocationPermission(locationStatus === RESULTS.GRANTED);

    if (cameraStatus !== RESULTS.GRANTED) {
      Alert.alert(
        'Permiso de Cámara Necesario',
        'La aplicación necesita acceso a la cámara. Por favor, concede el permiso.',
        [{text: 'OK', onPress: () => requestPermissions()}],
      );
    }

    if (locationStatus !== RESULTS.GRANTED) {
      Alert.alert(
        'Permiso de Ubicación Necesario',
        'La aplicación necesita acceso a la ubicación. Por favor, concede el permiso.',
        [{text: 'OK', onPress: () => requestPermissions()}],
      );
    }
  };

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePhoto({
        qualityPrioritization: 'speed',
      });
      const photoURI = `file://${photo.path}`;
      Geolocation.getCurrentPosition(
        position => {
          savePhoto(photoURI, position.coords);
        },
        error => {
          console.log(error);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    }
  };

  const savePhoto = (uri, location) => {
    const newPhoto = {
      uri,
      location,
    };
    setPhotoUri(uri);
    addPhoto(newPhoto);
    navigation.navigate('Main');
  };

  const {addPhoto} = usePhoto();

  if (!hasCameraPermission || !hasLocationPermission) {
    return (
      <Container>
        <Message>No tienes permisos de cámara o ubicación.</Message>
      </Container>
    );
  }

  if (device == null) {
    return <Message>Cargando cámara...</Message>;
  }

  return (
    <CenteredView>
      <Container>
        <Camera
          style={{flex: 1}}
          device={device}
          isActive={true}
          photo={true}
          ref={cameraRef}
        />
      </Container>
      <CustomButton onPress={takePicture}>Tomar Foto</CustomButton>
    </CenteredView>
  );
};

export default CameraScreen;
