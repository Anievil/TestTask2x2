import styled, {IStyledComponent} from 'styled-components/native';
import {TextInputProps} from 'react-native';
import {StyledComponentProps} from '../../interfaces/mixinInterfaces';
import {
  sizesMixin,
  marginMixin,
  paddingMixin,
  viewBoxMixin,
  borderMixin,
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
`;

export default StyledInput;
