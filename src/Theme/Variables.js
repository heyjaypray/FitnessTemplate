import Fonts from '../Styles/Fonts';
import DefaultColor from '../Styles/Colors';
const Colors = {
  ...DefaultColor,
};

const NavigationColors = {
  primary: Colors.primary,
};

const FontSize = Fonts.SIZE;
const FontStyle = Fonts.STYLE;

/**
 * Metrics Sizes
 */
const tiny = 5; // 10
const small = tiny * 2; // 10
const regular = tiny * 3; // 15
const large = regular * 2; // 30
const MetricsSizes = {
  tiny,
  small,
  regular,
  large,
};

export { FontSize, Colors, FontStyle, MetricsSizes, NavigationColors };
