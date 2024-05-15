import React from 'react';
import {NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, PostScreen, CreatePost} from './screens';
import { color } from './constants';

const Stack = createStackNavigator();
const MyTheme = {
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
  }
};
console.log(DefaultTheme,'DefaultTheme')
function AppNavigation() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="PostScreen" component={PostScreen} />
        <Stack.Screen name="CreatePost" component={CreatePost} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
