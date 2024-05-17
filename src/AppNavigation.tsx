import React from 'react';
import {NavigationContainer, RouteProp} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Home, PostScreen, CreatePost} from './screens';
import {MyTheme, color} from './constants';
import {NavButton} from './commonComponents';
import {ICGoBack} from '../assets';
import {RootStackParamList} from './interfaces/navigationProps';

const Stack = createStackNavigator<RootStackParamList>();

function AppNavigation() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={({navigation}) => ({
          headerLeft: () => (
            <NavButton
              ml="23px"
              Icon={ICGoBack}
              onPressButton={() => navigation.goBack()}
            />
          ),
          headerStyle: {height: 90, elevation: 0, backgroundColor: color.white},
          headerTitleContainerStyle: {marginLeft: 40},
        })}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PostScreen"
          component={PostScreen}
          options={({
            route,
          }: {
            route: RouteProp<RootStackParamList, 'PostScreen'>;
          }) => ({
            title: route.params.textTitle,
          })}
        />
        <Stack.Screen name="CreatePost" component={CreatePost} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
