import React, {useCallback} from 'react';
import {TouchableOpacity, Keyboard} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {StyledImage, StyledView} from '../../../../styles';
import {color} from '../../../../constants';
import {UnitifatedText} from '../../../../commonComponents';
import {NewsItemCardProps} from '../../../../interfaces/screenProps';
import {HomeNavigationProps} from '../../../../interfaces/navigationProps';

const NewsItemCard: React.FC<NewsItemCardProps> = ({
  title,
  url,
  date,
  text,
  id,
  openModal,
}) => {
  const navigation = useNavigation<HomeNavigationProps>();
  const openNews = useCallback(() => {
    navigation.navigate('PostScreen', {textTitle: title, url, date, text});
  }, [navigation]);

  const onLongPress = useCallback(() => {
    openModal(id);
  }, []);

  return (
    <TouchableOpacity onLongPress={onLongPress} onPress={openNews}>
      <StyledView
        elevation={5}
        shadowColor={color.buttonNavigation}
        mb="40px"
        height="300px"
        backgroundColor={color.white}
        borderTopRightRadius="10px"
        borderTopLeftRadius="10px"
        overflow="hidden">
        <StyledImage width="100%" height="200px" mb="20px" src={url} />
        <StyledView ph="18px" pb="19px">
          <UnitifatedText text={title} textType="title" />
          <UnitifatedText
            textType={'desc'}
            margin={{mt: '10px', mb: '5px'}}
            text={text}
          />
          <UnitifatedText textType="time" date={date} />
        </StyledView>
      </StyledView>
    </TouchableOpacity>
  );
};

export default NewsItemCard;
