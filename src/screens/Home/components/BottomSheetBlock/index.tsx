import React, {useCallback} from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import {StyledView} from '../../../../styles';

import {LongButton} from '../../../../commonComponents';
import {BottomSheetBlockProps} from '../../../../interfaces/screenProps';

const BottomSheetBlock: React.FC<BottomSheetBlockProps> = ({
  onCloseModal,
  bottomSheetRef,
  curtrentModalId,
}) => {
  const onPressDelete = useCallback(() => {
    console.log(curtrentModalId, 'curtrentModalId');
  }, [curtrentModalId]);

  const onPressClose = useCallback(() => {
    if (bottomSheetRef?.current?.close) {
      bottomSheetRef.current.close();
    }
  }, []);

  return (
    <BottomSheet
      snapPoints={[226]}
      index={-1}
      handleStyle={{paddingTop: 15, paddingBottom: 35}}
      handleIndicatorStyle={{
        width: 35,
        backgroundColor: '#8E949A',
        opacity: 0.3,
      }}
      onAnimate={onCloseModal}
      enablePanDownToClose
      ref={bottomSheetRef}>
      <StyledView ph="34px">
        <LongButton text="Delete" isDelete onPress={onPressDelete} />
        <LongButton text="Close" mt="15px" onPress={onPressClose} />
      </StyledView>
    </BottomSheet>
  );
};

export default BottomSheetBlock;
