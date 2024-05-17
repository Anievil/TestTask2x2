import React from 'react';
import {TouchableOpacity} from 'react-native';
import {StyledText, StyledView} from '../../styles';
import {color, fonts} from '../../constants';
import {LongButtonComponentProps} from '../../interfaces/commonComponents';

const LongButton: React.FC<LongButtonComponentProps> = ({
  isDisabled = false,
  isDelete = false,
  text,
  mt = '0px',
  onPress,
}) => {
  return (
    <TouchableOpacity disabled={isDisabled} onPress={onPress}>
      <StyledView
        width="100%"
        mt={mt}
        pv="14px"
        br="10px"
        backgroundColor={
          isDelete ? color.deleteButtonColor : color.longButtonColor
        }
        opacity={isDisabled ? 0.6 : 1}>
        <StyledText
          fontFamily={fonts.bold}
          fontSize="24px"
          lineHeight="35.04px"
          textAlign="center"
          color={color.white}>
          {text}
        </StyledText>
      </StyledView>
    </TouchableOpacity>
  );
};

export default LongButton;
