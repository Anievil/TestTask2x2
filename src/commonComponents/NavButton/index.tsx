import React, {useCallback} from 'react';
import {Keyboard} from 'react-native';
import {StyledView} from '../../styles';
import {color} from '../../constants';
import {NavButtonComponentProps} from '../../interfaces/commonComponents';
import {TouchableOpacity} from 'react-native';

const NavButton: React.FC<NavButtonComponentProps> = ({
  Icon,
  onPressButton,
  ml = '10px',
}) => {
  const handlePress = useCallback(() => {
    if (Keyboard.isVisible()) {
      Keyboard.dismiss();
    }
    onPressButton();
  }, []);

  return (
    <TouchableOpacity onPress={handlePress}>
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
