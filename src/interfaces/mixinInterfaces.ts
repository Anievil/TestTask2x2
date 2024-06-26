export interface FlexMixinProps {
  flex?: number;
  justifyContent?: string;
  alignItems?: string;
  alignSelf?: string;
  justifySelf?: string;
  flexDirection?: string;
  flexGrow?: string;
  flexShrink?: string;
  flexBasis?: string;
  flexWrap?: string;
}

export interface PaddingMixinProps {
  padding?: string;
  pt?: string;
  pr?: string;
  pb?: string;
  pl?: string;
  pv?: string;
  ph?: string;
}

export interface MarginMixinProps {
  margin?: string;
  mt?: string;
  mr?: string;
  mb?: string;
  ml?: string;
  mv?: string;
  mh?: string;
}

export interface BorderMixinProps {
  br?: string;
  border?: string;
  borderWidth?: string;
  borderColor?: string;
  borderBottom?: string;
  borderTop?: string;
  borderRight?: string;
  borderBottomColor?: string;
  borderBottomWidth?: string;
  borderTopColor?: string;
  borderTopWidth?: string;
  borderRightColor?: string;
  borderRightWidth?: string;
  borderLeftColor?: string;
  borderLeftWidth?: string;
  borderStyle?: string;
  borderTopRightRadius?: string;
  borderTopLeftRadius?: string;
  borderBottomLeftRadius?:  string;
  borderBottomRightRadius?: string;
}

export interface SizesMixinProps {
  width?: string;
  height?: string;
  minHeight?: string;
  maxHeight?: string;
  minWidth?: string;
  maxWidth?: string;
}

export interface ShadowMixinProps {
  boxShadow?: string;
  elevation?: number;
  shadowColor?: string;
  shadow?: string;
  shadowOffset?: {width: string; height: string};
  shadowOpacity?: string;
  shadowRadius?: string;
}

export interface TextMixinProps {
  textTransform?: string;
  textDecoration?: string;
  textAlign?: 'left' | 'center' | 'right' | undefined;
  color?: string;
  fontWeight?: string;
  fontSize?: string;
  fontFamily?: string;
  fontStyle?: string;
  lineHeight?: string;
  letterSpacing?: string;
}

export interface PositionMixinProps {
  position?: string;
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  zIndex?: number;
}

export interface ViewBoxMixinProps {
  backgroundColor?: string;
  opacity?: number;
  overflow?: string;
  transform?: string;
}

export interface StyledComponentProps
  extends FlexMixinProps,
    PaddingMixinProps,
    MarginMixinProps,
    BorderMixinProps,
    ShadowMixinProps,
    SizesMixinProps,
    TextMixinProps,
    PositionMixinProps,
    ViewBoxMixinProps {}
