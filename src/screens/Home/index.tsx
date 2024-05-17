import React, {useCallback, useRef, useState} from 'react';
import {FlatList, ListRenderItem, StyleSheet} from 'react-native';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';

import {ICNoResult} from '../../../assets';
import {color, windowHeight, windowWidth} from '../../constants';
import {HomeScreenProps} from '../../interfaces/navigationProps';
import {StyledText, StyledView} from '../../styles';
import {BottomSheetBlock, NewsItemCard, SearchBar} from './components';

const itemList: {id: number; text: string}[] = [
  {id: 0, text: 'Discovery by scientists 1'},
  {id: 1, text: 'Discovery by scientists 2'},
  {id: 2, text: 'Discovery by scientists 3'},
];

const Home: React.FC<HomeScreenProps> = () => {
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [curtrentModalId, setCurtrentModalId] = useState<number | null>(null);

  const bottomSheetRef = useRef<BottomSheet>(null);

  const openModal = useCallback((id: number) => {
    if (bottomSheetRef?.current?.snapToIndex) {
      bottomSheetRef.current.snapToIndex(0);
      setCurtrentModalId(id);
      setIsModalOpen(true);
    }
  }, []);

  const onCloseModal = useCallback(() => {
    if (isModalOpen === true) {
      setIsModalOpen(false);
      setCurtrentModalId(null);
    }
  }, [isModalOpen]);

  const renderNewsList: ListRenderItem<{id: number; text: string}> =
    useCallback(
      ({item: {text, id}}) => (
        <NewsItemCard textTitle={text} id={id} openModal={openModal} />
      ),
      [itemList],
    );

  const keyExtractor = useCallback(
    (item: {id: number; text: string}) => item.id.toString(),
    [],
  );

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
          keyExtractor={keyExtractor}
          renderItem={renderNewsList}
          onRefresh={refreshList}
          refreshing={isRefreshing}
        />
      ) : (
        <StyledView
          zIndex={-1}
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
      {isModalOpen && (
        <StyledView
          backgroundColor={color.black}
          opacity={0.4}
          position="absolute"
          zIndex={0}
          width={windowWidth + 'px'}
          height={windowHeight + 'px'}
        />
      )}

      <BottomSheetBlock
        bottomSheetRef={bottomSheetRef}
        onCloseModal={onCloseModal}
        curtrentModalId={curtrentModalId}
      />
    </StyledView>
  );
};

export default Home;
