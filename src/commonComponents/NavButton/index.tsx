import React from 'react';
import {StyledView} from '../../styles';
import {color} from '../../constants';
import {NavButtonComponentProps} from '../../interfaces/commonComponents';
import {TouchableOpacity} from 'react-native';

const NavButton: React.FC<NavButtonComponentProps> = ({
  Icon,
  onPressButton,
  ml = '10px',
}) => {
  return (
    <TouchableOpacity onPress={onPressButton}>
      <StyledView
        ml={ml}
        padding="8px"
        br="100px"
        backgroundColor={color.buttonNavigation}>
        <Icon height={30} width={30} />
      </StyledView>
    </TouchableOpacity>
  );
};

export default NavButton;
