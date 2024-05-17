import React, {useCallback} from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {StyledImage, StyledView} from '../../../../styles';
import {color} from '../../../../constants';
import {UnitifatedText} from '../../../../commonComponents';
import {NewsItemCardProps} from '../../../../interfaces/screenProps';
import {HomeNavigationProps} from '../../../../interfaces/navigationProps';

const NewsItemCard: React.FC<NewsItemCardProps> = ({textTitle, id, openModal}) => {
  const navigation = useNavigation<HomeNavigationProps>();
  const openNews = useCallback(() => {
    navigation.navigate('PostScreen', {textTitle: textTitle});
  }, [navigation]);

  const onLongPress = useCallback(() => {
    openModal(id)
  }, [])

  return (
    <TouchableOpacity onLongPress={onLongPress} onPress={openNews}>
      <StyledView
        elevation={5}
        shadowColor={color.buttonNavigation}
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
          src="https://s3-alpha-sig.figma.com/img/75a4/05fa/f002f29b525831aebc083a3a3d76c40e?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JVpyn94f-wRzYxwErgVd6YMrK3ys-Cie95S7iNW8BOkjqNyEcdr3V0opHBgG9rJbTKx-d~Y0fiDf1M1JUxRZrfFGBeC0RSVxEzV3G-Ehv2UUJWBG1~BrwJUr3-vZ2CVXz6l-OJ9KjMOlICdy7HqAaTEogb4S2cUzycrTFCT1Z36xHTjzZZtS87VFhapCa9mRKTrPSFVTpNVSHM8yNgPEIcEnZlIRIs6Cy~OGl9nO-OobGdwSI1iCZWrZ3sH3YLU5SFQkev6pKzvpTyapQxk0uHtsrDcpue-QehXMKA2jJN4eKlUu-~blxo-Y29IyOgaC~4hVZ7CDQOH5~MS7WjHupA__"
        />
        <StyledView ph="18px" pb="19px">
          <UnitifatedText text={'Title text ' + textTitle} textType="title" />
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
