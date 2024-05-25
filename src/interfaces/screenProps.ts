import React from 'react';
import {BottomSheetMethods} from '@devvie/bottom-sheet';
import {PostsProps} from './dataInterfase';

export interface NewsItemCardProps extends PostsProps {
  openModal: (id: string) => void;
}

export interface BottomSheetBlockProps {
  onCloseModal: () => void;
  bottomSheetRef: React.RefObject<BottomSheetMethods>;
  curtrentModalId: string;
}

export interface FormDataProps {
  title: string;
  url: string;
  link: string;
  text: string;
}

export interface InputFieldProps {
  placeholder: string;
  onBlur: () => void;
  onChange: () => void;
  value: string;
  isTextArea?: boolean
}
