import React, { useCallback } from 'react';
import {ICPlus, ICSearch} from '../../../../../assets';
import {StyledInput, StyledView} from '../../../../styles';
import {color, windowWidth} from '../../../../constants';
import {TouchableOpacity} from 'react-native';

const SearchBar: React.FC = () => {
  const createNewNews = useCallback(() => {

  }, [])

  return (
    <StyledView flexDirection="row" position='absolute' width={windowWidth + 'px'} ph='30px' pt='30px'>
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
      <TouchableOpacity onPress={createNewNews}>
        <StyledView
          ml="10px"
          padding="8px"
          br="100px"
          opacity={'0.25'}
          backgroundColor={color.buttonNavigation}>
          <ICPlus height={30} width={30} />
        </StyledView>
      </TouchableOpacity>
    </StyledView>
  );
};

export default SearchBar;
