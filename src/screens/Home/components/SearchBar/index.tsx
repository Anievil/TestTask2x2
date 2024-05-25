import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';

import {ICPlus, ICSearch} from '../../../../../assets';
import {StyledInput, StyledView} from '../../../../styles';
import {color} from '../../../../constants';
import {NavButton} from '../../../../commonComponents';
import {HomeNavigationProps} from '../../../../interfaces/navigationProps';
import {useFirestoreData} from '../../../../customHooks';

const SearchBar: React.FC = () => {
  const navigation = useNavigation<HomeNavigationProps>();
  const {getAllData} = useFirestoreData();

  const createNewNews = useCallback(() => {
    navigation.navigate('CreatePost');
  }, []);

  const search = useCallback((event: {nativeEvent: {text: string}}) => {
    getAllData(event.nativeEvent.text);
  }, []);

  return (
    <StyledView flexDirection="row" pv="30px">
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
          color={color.black}
          onChange={search}
          br="10px"
          ml="10px"
        />
      </StyledView>
      <NavButton Icon={ICPlus} onPressButton={createNewNews} />
    </StyledView>
  );
};

export default SearchBar;
