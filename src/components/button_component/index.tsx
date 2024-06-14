import React from 'react';
import {StyledButton, StyledButtonText} from './style';
import {CustomButtonProps} from './types';

const CustomButton: React.FC<CustomButtonProps> = ({onPress, children}) => {
  return (
    <StyledButton onPress={onPress}>
      <StyledButtonText>{children}</StyledButtonText>
    </StyledButton>
  );
};

export default CustomButton;
