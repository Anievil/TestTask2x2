import {StackNavigationProp, StackScreenProps} from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  PostScreen: {textTitle: string};
  CreatePost: undefined;
};

export type PostScreenProps = StackScreenProps<
  RootStackParamList,
  'PostScreen'
>;
export type HomeScreenProps = StackScreenProps<RootStackParamList, 'Home'>;
export type CreatePostScreenProps = StackScreenProps<
  RootStackParamList,
  'CreatePost'
>;

export type PostNavigationProps = StackNavigationProp<
  RootStackParamList,
  'PostScreen'
>;
export type HomeNavigationProps = StackNavigationProp<
  RootStackParamList,
  'Home'
>;
export type CreatePostNavigationProps = StackNavigationProp<
  RootStackParamList,
  'CreatePost'
>;
