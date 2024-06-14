import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  padding: 20px;
`;

export const FullImage = styled.Image`
  width: 80%;
  height: 50%;
  margin-bottom: 20px;
`;

export const LocationTextContainer = styled.View`
  width: 80%;
`;

export const LocationText = styled.Text`
  font-size: 16px;
  color: #333;
  text-align: center;
  margin-bottom: 5px;
`;

export const ShareButton = styled.TouchableOpacity`
  background-color: #007bff;
  padding: 10px;
  margin-top: 20px;
  border-radius: 5px;
  width: 80%;
  align-items: center;
`;

export const ShareButtonText = styled.Text`
  color: white;
  text-align: center;

  font-size: 16px;
`;
