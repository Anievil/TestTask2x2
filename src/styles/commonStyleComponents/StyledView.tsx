import styled, {IStyledComponent} from 'styled-components/native';
import { ViewProps } from 'react-native';
import {StyledComponentProps} from '../../interfaces/mixinInterfaces';
import {
  sizesMixin,
  marginMixin,
  paddingMixin,
  viewBoxMixin,
  borderMixin,
  flexMixin,
  positionMixin,
} from './mixins';

interface StyledViewProps
  extends ViewProps,
  StyledComponentProps {}

const StyledView: IStyledComponent<
"native",
StyledViewProps
> = styled.View`
  ${sizesMixin}
  ${marginMixin}
    ${paddingMixin}
    ${viewBoxMixin}
    ${borderMixin}
    ${flexMixin}
    ${positionMixin}
`;

export default StyledView;
