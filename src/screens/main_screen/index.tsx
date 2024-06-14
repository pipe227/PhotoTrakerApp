import React from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ButtonContainer, Container, Thumbnail} from './styles';
import {usePhoto} from '../../store/photo_context';
import CustomButton from '../../components/button_component';

const MainScreen: React.FC = () => {
  const navigation = useNavigation();
  const {photos} = usePhoto();

  const renderPhoto = ({item}: any) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Photo', {photo: item})}>
      <Thumbnail source={{uri: item.uri}} />
    </TouchableOpacity>
  );

  return (
    <Container>
      <FlatList
        data={photos}
        renderItem={renderPhoto}
        keyExtractor={(item, index) => index.toString()}
        numColumns={3}
      />
      <ButtonContainer>
        <CustomButton onPress={() => navigation.navigate('Camera')}>
          Tomar Foto
        </CustomButton>
      </ButtonContainer>
    </Container>
  );
};

export default MainScreen;
