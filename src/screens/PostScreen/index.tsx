import React from 'react';
import {UnitifatedText} from '../../commonComponents';
import {color, windowWidth} from '../../constants';
import {StyledImage, StyledView, StyledScrollView} from '../../styles';
import {PostScreenProps} from '../../interfaces/navigationProps';

const PostScreen: React.FC<PostScreenProps> = ({route}) => {
  const {text, date, url} = route.params;

  return (
    <StyledView flex={1}>
      <StyledImage
        position="absolute"
        src={url}
        width={windowWidth + 'px'}
        height="50%"
      />
      <StyledView
        position="absolute"
        bottom="0px"
        height="60%"
        width={windowWidth + 'px'}
        backgroundColor={color.textConteinerColor}
        borderTopLeftRadius="50px"
        borderTopRightRadius="50px"
        overflow="hidden"
        pt="26px"
        ph="30px">
        <UnitifatedText
          date={date}
          isPostScreen
          textType="time"
          margin={{mb: '15px'}}
        />
        <StyledScrollView>
          <UnitifatedText isPostScreen text={text} textType="desc" />
        </StyledScrollView>
      </StyledView>
    </StyledView>
  );
};

export default PostScreen;
