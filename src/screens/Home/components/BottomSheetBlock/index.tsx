import React, {useCallback} from 'react';
import BottomSheet, {BottomSheetMethods} from '@devvie/bottom-sheet';
import {StyledView} from '../../../../styles';

import {LongButton} from '../../../../commonComponents';
import {BottomSheetBlockProps} from '../../../../interfaces/screenProps';
import {useFirestoreData} from '../../../../customHooks';
import { color } from '../../../../constants';

const BottomSheetBlock: React.FC<BottomSheetBlockProps> = ({
  onCloseModal,
  bottomSheetRef,
  curtrentModalId,
}) => {
  const {deletePost} = useFirestoreData();
  const onPressDelete = useCallback(() => {
    deletePost(curtrentModalId);
    if (bottomSheetRef?.current?.close) {
      bottomSheetRef.current.close();
    }
  }, [curtrentModalId]);

  const onPressClose = useCallback(() => {
    if (bottomSheetRef?.current?.close) {
      bottomSheetRef.current.close();
    }
  }, []);

  return (
    <BottomSheet
      height={226}
      closeOnDragDown
      style={{paddingTop: 15}}
      dragHandleStyle={{
        marginTop: -5,
        width: 35,
        backgroundColor: color.placehlderColor,
        opacity: 0.3,
      }}
      onClose={onCloseModal}
      ref={bottomSheetRef}>
      <StyledView ph="34px">
        <LongButton text="Delete" isDelete onPress={onPressDelete} />
        <LongButton text="Close" mt="15px" onPress={onPressClose} />
      </StyledView>
    </BottomSheet>
  );
};

export default BottomSheetBlock;
