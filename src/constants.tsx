import {Dimensions} from 'react-native';
import {DefaultTheme} from '@react-navigation/native';

import {colorProps, fontsProps} from './interfaces/constantsInterfase';

export const color: colorProps = {
  white: '#fff',
  black: '#000',
  searchBackground: '#f2f2f3',
  buttonNavigation: '#e8e9ea',
  placehlderColor: '#8E949A',
  grayTextColor: '#A4A9AE',
  textConteinerColor: '#FCFCFC',
  headerColorText: '#23303B',
  timeTextColor: '#8E949A',
  deleteButtonColor: '#FF6363',
  longButtonColor: '#456EFE',
};

export const fonts: fontsProps = {
  regular: 'Roboto-Regular',
  semibold: 'Roboto-Medium',
  bold: 'Roboto-Bold',
  light: 'Roboto-Light',
  thin: 'Roboto-Thin',
};

export const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fefeff',
    text: '#000',
  },
  fonts: {
    regular: {
      fontFamily: 'Roboto-Regular',
    },
    medium: {
      fontFamily: 'Roboto-Medium',
      fontWeight: 600,
    },
    bold: {
      fontFamily: 'Roboto-Bold',
    },
  },
};

export const windowWidth: number = Dimensions.get('window').width;
export const windowHeight: number = Dimensions.get('window').height;
