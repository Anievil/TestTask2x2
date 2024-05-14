import {css, CSSProp} from 'styled-components';
import {
  FlexMixinProps,
  PaddingMixinProps,
  MarginMixinProps,
  BorderMixinProps,
  ShadowMixinProps,
  SizesMixinProps,
  TextMixinProps,
  ViewBoxMixinProps,
  PositionMixinProps,
} from '../../interfaces/mixinInterfaces';

export const flexMixin: CSSProp = css<FlexMixinProps>`
  ${({flex}) => (flex ? `flex: ${flex};` : '')}
  ${({justifyContent}) =>
    justifyContent ? `justify-content: ${justifyContent};` : ''}
    ${({alignItems}) => (alignItems ? `align-items: ${alignItems};` : '')}
    ${({alignSelf}) => (alignSelf ? `align-self: ${alignSelf};` : '')}
    ${({justifySelf}) => (justifySelf ? `justify-self: ${justifySelf};` : '')}
    ${({flexDirection}) =>
    flexDirection ? `flex-direction: ${flexDirection};` : ''}
    ${({flexGrow}) => (flexGrow ? `flex-grow: ${flexGrow};` : '')}
    ${({flexShrink}) => (flexShrink ? `flex-shrink: ${flexShrink};` : '')}
    ${({flexBasis}) => (flexBasis ? `flex-basis ${flexBasis};` : '')}
    ${({flexWrap}) => (flexWrap ? `flex-wrap ${flexWrap};` : '')}
`;
export const paddingMixin: CSSProp = css<PaddingMixinProps>`
  ${({padding}) => (padding ? `padding: ${padding};` : '')}
  ${({pt}) => (pt ? `padding-top: ${pt};` : '')}
    ${({pr}) => (pr ? `padding-right: ${pr};` : '')}
    ${({pb}) => (pb ? `padding-bottom: ${pb};` : '')}
    ${({pl}) => (pl ? `padding-left: ${pl};` : '')}
    ${({pv}) => (pv ? `padding-vertical: ${pv};` : '')}
    ${({ph}) => (ph ? `padding-horizontal: ${ph};` : '')}
`;
export const marginMixin: CSSProp = css<MarginMixinProps>`
  ${({margin}) => (margin ? `margin: ${margin};` : '')}
  ${({mt}) => (mt ? `margin-top: ${mt};` : '')}
    ${({mr}) => (mr ? `margin-right: ${mr};` : '')}
    ${({mb}) => (mb ? `margin-bottom: ${mb};` : '')}
    ${({ml}) => (ml ? `margin-left: ${ml};` : '')}
    ${({mv}) => (mv ? `margin-vertical: ${mv};` : '')}
    ${({mh}) => (mh ? `margin-horizontal: ${mh};` : '')}
`;
export const borderMixin: CSSProp = css<BorderMixinProps>`
  ${({br}) => (br ? `border-radius: ${br};` : '')}
  ${({border}) => (border ? `border: ${border};` : '')}
    ${({borderWidth}) => (borderWidth ? `border-width: ${borderWidth};` : '')}
    ${({borderColor}) => (borderColor ? `border-color: ${borderColor};` : '')}
    ${({borderBottom}) =>
    borderBottom
      ? `border-bottom-width: ${borderBottom.split(' ')[0]};
                                border-bottom-color: ${
                                  borderBottom.split(' ')[1]
                                };`
      : ''}
    ${({borderTop}) =>
    borderTop
      ? `border-top-width: ${borderTop.split(' ')[0]};
                                border-top-color: ${borderTop.split(' ')[1]};`
      : ''}
    ${({borderRight}) =>
    borderRight
      ? `border-right-width: ${borderRight.split(' ')[0]};
                                border-right-color: ${
                                  borderRight.split(' ')[1]
                                };`
      : ''}
    ${({borderBottomColor}) =>
    borderBottomColor ? `border-bottom-color: ${borderBottomColor}` : ''};
  ${({borderBottomWidth}) =>
    borderBottomWidth ? `border-bottom-width: ${borderBottomWidth}` : ''};
  ${({borderTopColor}) =>
    borderTopColor ? `border-top-color: ${borderTopColor}` : ''};
  ${({borderTopWidth}) =>
    borderTopWidth ? `border-top-width: ${borderTopWidth}` : ''};
  ${({borderRightColor}) =>
    borderRightColor ? `border-right-color: ${borderRightColor}` : ''};
  ${({borderRightWidth}) =>
    borderRightWidth ? `border-right-width: ${borderRightWidth}` : ''};
  ${({borderLeftColor}) =>
    borderLeftColor ? `border-left-color: ${borderLeftColor}` : ''};
  ${({borderLeftWidth}) =>
    borderLeftWidth ? `border-left-width: ${borderLeftWidth}` : ''};
  ${({borderStyle}) => (borderStyle ? `border-style: ${borderStyle}` : '')};
  ${({borderRadius}) => (borderRadius ? `border-radius: ${borderRadius}` : '')};
  ${({borderTopRightRadius}) =>
    borderTopRightRadius
      ? `border-top-right-radius: ${borderTopRightRadius}`
      : ''};
  ${({borderTopLeftRadius}) =>
    borderTopLeftRadius
      ? `border-top-left-radius: ${borderTopLeftRadius}`
      : ''};
  ${({borderBottomLeftRadius}) =>
    borderBottomLeftRadius
      ? `border-bottom-left-radius: ${borderBottomLeftRadius}`
      : ''};
  ${({borderBottomRightRadius}) =>
    borderBottomRightRadius
      ? `border-bottom-right-radius: ${borderBottomRightRadius}`
      : ''};
`;
export const sizesMixin: CSSProp = css<SizesMixinProps>`
  ${({width}) => (width ? `width: ${width};` : '')}
  ${({height}) => (height ? `height: ${height};` : '')}
    ${({minHeight}) => (minHeight ? `min-height: ${minHeight};` : '')}
    ${({maxHeight}) => (maxHeight ? `max-height: ${maxHeight};` : '')}
    ${({minWidth}) => (minWidth ? `min-width: ${minWidth};` : '')}
    ${({maxWidth}) => (maxWidth ? `max-width: ${maxWidth};` : '')}
`;
export const shadowMixin: CSSProp = css<ShadowMixinProps>`
  ${({boxShadow}) => (boxShadow ? `box-shadow: ${boxShadow};` : '')}
  ${({elevation}) => (elevation ? `elevation: ${elevation};` : '')}
    ${({shadowColor}) => (shadowColor ? `shadow-color: ${shadowColor};` : '')}
    ${({shadow}) => (shadow ? `shadow: ${shadow};` : '')}
    ${({shadowOffset}) =>
    typeof shadowOffset === 'object'
      ? `shadow-offset: ${shadowOffset['width']} ${shadowOffset['height']};`
      : ''}
    ${({shadowOpacity}) =>
    shadowOpacity ? `shadow-opacity: ${shadowOpacity};` : ''}
    ${({shadowRadius}) =>
    shadowRadius ? `shadow-radius: ${shadowRadius};` : ''}
`;
export const textMixin: CSSProp = css<TextMixinProps>`
  ${({textTransform}) =>
    textTransform ? `text-transform: ${textTransform};` : ''}
  ${({textDecoration}) =>
    textDecoration ? `text-decoration: ${textDecoration};` : ''}
  ${({textAlign}) => (textAlign ? `text-align: ${textAlign};` : '')}
    ${({color}) => (color ? `color: ${color};` : '')}
    ${({fontWeight}) => (fontWeight ? `font-weight: ${fontWeight};` : '')}
    ${({fontSize}) => (fontSize ? `font-size: ${fontSize};` : '')}
    ${({fontFamily}) => (fontFamily ? `font-family: ${fontFamily};` : '')}
    ${({fontStyle}) => (fontStyle ? `font-style: ${fontStyle};` : '')}
    ${({lineHeight}) => (lineHeight ? `line-height: ${lineHeight};` : '')}
    ${({letterSpacing}) =>
    letterSpacing ? `letter-spacing: ${letterSpacing};` : ''}
`;
export const positionMixin: CSSProp = css<PositionMixinProps>`
  ${({position}) => (position ? `position: ${position};` : '')}
  ${({left}) => (left ? `left: ${left};` : '')}
    ${({right}) => (right ? `right: ${right};` : '')}
    ${({top}) => (top ? `top: ${top};` : '')}
    ${({bottom}) => (bottom ? `bottom: ${bottom};` : '')}
    ${({zIndex}) => (zIndex ? `z-index: ${zIndex};` : '')}
`;
export const viewBoxMixin: CSSProp = css<ViewBoxMixinProps>`
  ${({backgroundColor}) =>
    backgroundColor ? `background-color: ${backgroundColor};` : ''}
  ${({opacity}) => (opacity ? `opacity: ${opacity};` : '')}
    ${({overflow}) => (overflow ? `overflow: ${overflow};` : '')} /* ${({
    transform,
  }) => (transform ? `transform: ${transform};` : '')} */
`;
