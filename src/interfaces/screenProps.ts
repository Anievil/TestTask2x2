import React from 'react';
import {BottomSheetMethods} from '@gorhom/bottom-sheet/lib/typescript/types';

export interface NewsItemCardProps {
  textTitle: string;
  openModal: (id: number) => void;
  id: number;
}

export interface BottomSheetBlockProps {
  onCloseModal: () => void;
  bottomSheetRef: React.RefObject<BottomSheetMethods>;
  curtrentModalId: number | null;
}
