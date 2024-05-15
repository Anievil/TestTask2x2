import React, { useCallback } from 'react';
import {StyledImage, StyledView} from '../../../../styles';
import {color} from '../../../../constants';
import {UnitifatedText} from '../../../../commonComponents';
import {TouchableOpacity} from 'react-native';

const NewsItemCard: React.FC = () => {

    const openModal = useCallback(() => {

    }, [])

    const openNews = useCallback(() => {

    }, [])

  return (
    <TouchableOpacity onLongPress={openModal} onPress={openNews}>
      <StyledView
        mb="40px"
        flex={1}
        height="300px"
        backgroundColor={color.white}
        borderTopRightRadius="10px"
        borderTopLeftRadius="10px"
        overflow="hidden">
        <StyledImage
          width="100%"
          height="200px"
          mb="20px"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgRGIo7ozoAQLdBt6UiriOViA5fcGHGpv_KyEODjsHaw&s"
        />
        <StyledView ph="18px" pb="19px">
          <UnitifatedText text="Title text" textType="title" />
          <UnitifatedText
            text="Description text"
            textType="desc"
            margin={{mt: '10px', mb: '5px'}}
          />
          <UnitifatedText text="Time text" textType="time" />
        </StyledView>
      </StyledView>
    </TouchableOpacity>
  );
};

export default NewsItemCard;
