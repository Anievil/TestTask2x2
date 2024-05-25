import React, {useCallback, useRef, useState} from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import BottomSheet, {BottomSheetMethods} from '@devvie/bottom-sheet';

import {ICNoResult} from '../../../assets';
import {color, windowHeight, windowWidth} from '../../constants';
import {HomeScreenProps} from '../../interfaces/navigationProps';
import {StyledText, StyledView} from '../../styles';
import {BottomSheetBlock, NewsItemCard, SearchBar} from './components';
import {usePostStore} from '../../zustand';
import {PostsProps} from '../../interfaces/dataInterfase';
import {useFirestoreData} from '../../customHooks';

const Home: React.FC<HomeScreenProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [curtrentModalId, setCurtrentModalId] = useState<string>('');
  const bottomSheetRef = useRef<BottomSheetMethods>(null);

  const {posts} = usePostStore();
  const {getAllData, isRefreshing} = useFirestoreData();

  const openModal = useCallback((id: string) => {
    if (bottomSheetRef?.current?.open) {
      bottomSheetRef.current.open();
      setIsModalOpen(true);
      setCurtrentModalId(id);
    }
  }, []);

  const onCloseModal = useCallback(() => {
    if (isModalOpen === true) {
      setIsModalOpen(false);
      setCurtrentModalId('');
    }
  }, [isModalOpen]);
  const renderNewsList: ListRenderItem<PostsProps> = useCallback(
    ({item: {text, id, title, url, date}}) => (
      <NewsItemCard
        title={title}
        url={url}
        date={date}
        text={text}
        id={id}
        openModal={openModal}
      />
    ),
    [posts],
  );

  const keyExtractor = useCallback((item: PostsProps) => item.id, [posts]);

  return (
    <StyledView ph="30px" flex={1}>
      <SearchBar />
        <FlatList
          data={posts}
          showsVerticalScrollIndicator={false}
          keyExtractor={keyExtractor}
          renderItem={renderNewsList}
          onRefresh={getAllData}
          refreshing={isRefreshing}
        />
      {posts.length === 0 && (
        <StyledView
          position="absolute"
          zIndex={-1}
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
