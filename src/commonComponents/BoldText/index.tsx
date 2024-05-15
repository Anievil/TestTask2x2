import React, {useEffect, useState} from 'react';
import {StyledText} from '../../styles';
import {color, fonts} from '../../constants';
import {TextComponentProps} from '../../interfaces/commonComponents';

const UnitifatedText: React.FC<TextComponentProps> = ({text, textType, margin}) => {
  const [textColor, setColor] = useState<string>(color.black);
  const [fontSize, setFontSize] = useState<string>('');
  const [fontFamily, setFontFamily] = useState<string>('');
  const [lineHeight, setLineHeight] = useState<string>('');
  useEffect(() => {
    switch (textType) {
      case 'title':
        setColor(color.black);
        setFontSize('20px');
        setFontFamily(fonts.semibold);
        setLineHeight('23.44px');
        break;
      case 'desc':
        setColor(color.black);
        setFontSize('16px');
        setFontFamily(fonts.light);
        setLineHeight('16px');
        break;
      case 'time':
        setColor(color.black);
        setFontSize('12px');
        setFontFamily(fonts.thin);
        setLineHeight('17px');
        break;
      default:
        setColor(color.black);
        setFontSize('16px');
        setFontFamily(fonts.light);
        setLineHeight('16px');
        break;
    }
  }, []);
  return (
    <StyledText
      color={textColor}
      fontFamily={fontFamily}
      mt={margin?.mt || '0px'}
      mb={margin?.mb || '0px'}
      mr={margin?.mr || '0px'}
      ml={margin?.ml || '0px'}
      fontSize={fontSize}
      lineHeight={lineHeight}>
      {text}
    </StyledText>
  );
};

export default UnitifatedText;
