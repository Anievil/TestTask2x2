import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';

import {ICPlus, ICSearch} from '../../../../../assets';
import {StyledInput, StyledView} from '../../../../styles';
import {color, windowWidth} from '../../../../constants';
import {NavButton} from '../../../../commonComponents';
import {HomeNavigationProps} from '../../../../interfaces/navigationProps';

const SearchBar: React.FC = () => {
  const navigation = useNavigation<HomeNavigationProps>();
  const createNewNews = useCallback(() => {
    navigation.navigate('CreatePost');
  }, []);

  return (
    <StyledView
      flexDirection="row"
      position="absolute"
      width={windowWidth + 'px'}
      ph="30px"
      pt="30px">
      <StyledView
        backgroundColor={color.searchBackground}
        alignItems="center"
        flexDirection="row"
        flex={1}
        br="10px"
        pl="14px">
        <ICSearch />
        <StyledInput
          placeholderTextColor={color.placehlderColor}
          placeholder="Search"
          flex={1}
          br="10px"
          ml="10px"
        />
      </StyledView>
      <NavButton Icon={ICPlus} onPressButton={createNewNews} />
    </StyledView>
  );
};

export default SearchBar;
