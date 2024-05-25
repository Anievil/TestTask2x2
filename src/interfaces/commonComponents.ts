import React from 'react';
import {SvgProps} from 'react-native-svg';

export interface TextComponentProps {
  text?: string;
  date?: number;
  isPostScreen?: boolean;
  textType: 'title' | 'desc' | 'time';
  margin?: {mt?: string; mb?: string; mr?: string; ml?: string};
}

export interface NavButtonComponentProps {
  Icon: React.FC<SvgProps>;
  onPressButton: () => void;
  ml?: string;
}

export interface LongButtonComponentProps {
  text: string;
  isDisabled?: boolean;
  isDelete?: boolean;
  mt?: string;
  onPress: () => void;
}
