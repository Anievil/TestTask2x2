import styled, {IStyledComponent} from 'styled-components/native';
import {ScrollViewProps} from 'react-native';
import {StyledComponentProps} from '../../interfaces/mixinInterfaces';
import {
  sizesMixin,
  marginMixin,
  paddingMixin,
  viewBoxMixin,
  borderMixin,
} from './mixins';

interface StyledInputProps extends ScrollViewProps, StyledComponentProps {}

const StyledScrollView: IStyledComponent<
  'native',
  StyledInputProps
> = styled.ScrollView`
  ${sizesMixin}
  ${marginMixin}
    ${paddingMixin}
    ${viewBoxMixin}
    ${borderMixin}
`;

export default StyledScrollView;
