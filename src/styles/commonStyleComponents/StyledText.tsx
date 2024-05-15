import styled, {IStyledComponent} from 'styled-components/native';
import { TextProps } from 'react-native';
import {StyledComponentProps} from '../../interfaces/mixinInterfaces';
import {
  sizesMixin,
  textMixin,
  marginMixin,
  paddingMixin,
  borderMixin,
  flexMixin,
  positionMixin,
} from './mixins';

interface StyledTextProps
  extends TextProps,
  StyledComponentProps {}

const StyledText: IStyledComponent<
"native",
StyledTextProps
> = styled.Text`
  ${sizesMixin}
  ${marginMixin}
    ${paddingMixin}
    ${textMixin}
    ${borderMixin}
    ${flexMixin}
    ${positionMixin}
`;

export default StyledText;