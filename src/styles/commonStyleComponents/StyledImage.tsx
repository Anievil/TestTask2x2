import styled from 'styled-components/native';
import { sizesMixin, marginMixin, paddingMixin ,viewBoxMixin } from './mixins';

const StyledImage = styled.Image`
    ${sizesMixin}
    ${marginMixin}
    ${paddingMixin}
    ${viewBoxMixin}
`

export default StyledImage