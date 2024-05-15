import styled, {IStyledComponent} from 'styled-components/native';
import {StyledComponentProps} from '../../interfaces/mixinInterfaces';
import {
  sizesMixin,
  marginMixin,
  paddingMixin,
  viewBoxMixin,
} from './mixins';

interface StyledImageProps
  extends StyledComponentProps {
    src: string;
  }

const StyledImage: IStyledComponent<
"native",
StyledImageProps
>= styled.Image`
    ${sizesMixin}
    ${marginMixin}
    ${paddingMixin}
    ${viewBoxMixin}
`

export default StyledImage