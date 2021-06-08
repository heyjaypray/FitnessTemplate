import { Platform } from 'react-native';

export const FONT_FAMILY_GROUP = {
  Group1: 'SourceSerifPro',
  Group2: 'Lato',
};

const FONT_FAMILY = FONT_FAMILY_GROUP.Group1;

const FontNames = {
  default:
    Platform.OS === 'ios' ? `${FONT_FAMILY}-Light` : `${FONT_FAMILY}-Light`,
  italic:
    Platform.OS === 'ios'
      ? `${FONT_FAMILY}-LightItalic`
      : `${FONT_FAMILY}-LightItalic`,
  medium:
    Platform.OS === 'ios' ? `${FONT_FAMILY}-Medium` : `${FONT_FAMILY}-Medium`,
  mediumItalic:
    Platform.OS === 'ios'
      ? `${FONT_FAMILY}-MediumItalic`
      : `${FONT_FAMILY}MediumItalic`,
  bold: Platform.OS === 'ios' ? `${FONT_FAMILY}-Bold` : `${FONT_FAMILY}-Bold`,
  semiBold:
    Platform.OS === 'ios'
      ? `${FONT_FAMILY}-SemiBold`
      : `${FONT_FAMILY}-SemiBold`,
  boldItalic:
    Platform.OS === 'ios'
      ? `${FONT_FAMILY}-BoldItalic`
      : `${FONT_FAMILY}-BoldItalic`,
  regular:
    Platform.OS === 'ios' ? `${FONT_FAMILY}-Regular` : `${FONT_FAMILY}-Regular`,
  regularItalic:
    Platform.OS === 'ios'
      ? `${FONT_FAMILY}-RegularItalic`
      : `${FONT_FAMILY}-RegularItalic`,
};

const FontStyles = {
  normal: {
    fontFamily: FontNames.regular,
  },
  medium: {
    fontFamily: FontNames.medium,
  },
  bold: {
    fontFamily: FontNames.bold,
  },
  light: {
    fontFamily: FontNames.light,
  },
};

const FontSizes = {
  xxxExtra: 40,
  xxExtra: 30,
  xExtra: 26,
  extra: 22,
  big: 18,
  medium: 16,
  regular: 14,
  small: 12,
  minimize: 10,
};

export default {
  NAME: FontNames,
  SIZE: FontSizes,
  STYLE: FontStyles,
};
