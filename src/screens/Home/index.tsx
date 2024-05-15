import React, {useCallback, useRef, useState} from 'react';
import {FlatList, SafeAreaView} from 'react-native';

import {ICNoResult} from '../../../assets';
import {StyledText, StyledView} from '../../styles';
import {SearchBar, NewsItemCard} from './components';
import {color, windowHeight, windowWidth} from '../../constants';

const itemList = ['1', '2', '3'];

const Home = () => {
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  const renderNewsList = useCallback(() => <NewsItemCard />, [itemList]);

  const refreshList = useCallback(() => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 1000);
  }, []);

  return (
      <StyledView ph="30px">
        <SearchBar />
        {itemList.length ? (
          <FlatList
            style={{marginTop: 118}}
            data={itemList}
            keyExtractor={item => item}
            renderItem={renderNewsList}
            onRefresh={refreshList}
            refreshing={isRefreshing}
          />
        ) : (
          <StyledView
            zIndex="-1"
            position="absolute"
            width={windowWidth + 'px'}
            height={windowHeight + 'px'}
            alignItems="center"
            justifyContent="center">
            <ICNoResult />
            <StyledText
              color={color.grayTextColor}
              fontFamily="Roboto-Regular"
              mt="29px"
              fontSize="16px">
              No results found
            </StyledText>
          </StyledView>
        )}
      </StyledView>
  );
};

export default Home;
