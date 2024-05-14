import styled from 'styled-components/native';
import {
  sizesMixin,
  marginMixin,
  paddingMixin,
  viewBoxMixin,
  borderMixin,
  flexMixin,
  positionMixin,
} from './mixins';

const StyledView = styled.View`
  ${sizesMixin}
  ${marginMixin}
    ${paddingMixin}
    ${viewBoxMixin}
    ${borderMixin}
    ${flexMixin}
    ${positionMixin}
`;

export default StyledView;
