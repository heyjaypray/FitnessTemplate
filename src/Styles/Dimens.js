import { Dimensions } from 'react-native';
import { verticalScale } from 'react-native-size-matters';
const screenSize = Dimensions.get('window');
const scaleInApp = verticalScale;
export default {
  scaleInApp: scaleInApp,
  borderRadius: 32,
  borderWidth: 0.5,
  space: 20,
  screenSize,
};
