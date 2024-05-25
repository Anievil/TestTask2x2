import styled, {IStyledComponent} from 'styled-components/native';
import {TextInputProps} from 'react-native';
import {StyledComponentProps} from '../../interfaces/mixinInterfaces';
import {
  sizesMixin,
  marginMixin,
  paddingMixin,
  viewBoxMixin,
  borderMixin,
  textMixin,
} from './mixins';

interface StyledInputProps
  extends TextInputProps,
  StyledComponentProps {}

const StyledInput: IStyledComponent<
  "native",
  StyledInputProps
> = styled.TextInput`
  ${sizesMixin}
  ${marginMixin}
    ${paddingMixin}
    ${viewBoxMixin}
    ${borderMixin}
    ${textMixin}
`;

export default StyledInput;
