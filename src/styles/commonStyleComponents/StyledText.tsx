import styled from 'styled-components/native';
import {
  sizesMixin,
  textMixin,
  marginMixin,
  paddingMixin,
  borderMixin,
  flexMixin,
  positionMixin,
} from './mixins';

const StyledText = styled.Text`
  ${sizesMixin}
  ${marginMixin}
    ${paddingMixin}
    ${textMixin}
    ${borderMixin}
    ${flexMixin}
    ${positionMixin}
`;

export default StyledText;