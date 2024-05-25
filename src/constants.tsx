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

export const defaultImgUrl: string = 'https://s3-alpha-sig.figma.com/img/75a4/05fa/f002f29b525831aebc083a3a3d76c40e?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZWD6At5GPNszUfzlZLWCHebKGWWeQjlxxQ-iYhPzEEKbgKzVnTbpW7txHQrapAvLbhkEvkReh7sx7Ix0Dbcqy4lOl93-wT7VwEni7wKQNitSaZb9EL0T5-OdSVTVY~mjQcsPzTqvq-su7FJxWP5NFNfxcYpzxB4LGRX17SOVwPMK~ZK4sdjhgyQ~CArS96WclqHlN4Fn8IvhbAi6hpoFIqXTmLLNZByH4~JNNB727gd46ArXfoQikubgrF0eLRd3LGFKa6bSkRJYvdagXkqLGqeHjKmQKMR3aimDQ3e3KFqNDUM~MXZYY5fw~EIjPWnY-zxsGzIuK6OSacEic7mqsA__'