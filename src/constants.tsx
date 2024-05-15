import { Dimensions } from 'react-native';
import {colorProps, fontsProps} from './interfaces/constantsInterfase';

export const color: colorProps = {
  white: '#fff',
  black: '#000',
  searchBackground: '#f2f2f3',
  buttonNavigation: '#A4A9AE',
  placehlderColor: '#8E949A',
  grayTextColor: '#A4A9AE',
  headerColorText: '#23303B',
  timeTextColor: '#8E949A',
};

export const fonts: fontsProps = {
  regular: 'Roboto-Regular',
  semibold: 'Roboto-Medium',
  bold: 'Roboto-Bold',
  light: 'Roboto-Light',
  thin: 'Roboto-Thin',
};

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;