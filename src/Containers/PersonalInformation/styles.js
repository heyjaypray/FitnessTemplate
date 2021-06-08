import Dimens from '../../Styles/Dimens';
import Fonts, { FONT_FAMILY_GROUP } from '../../Styles/Fonts';
import { Dimensions, StyleSheet } from 'react-native';
const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    width: width + width * 0.9,
    height: '100%',
    backgroundColor: 'rgba(181, 176, 163, 0.4)',
  },
  titleContainer: {
    flexDirection: 'row',
    marginTop: height * 0.108,
  },
  titleContainerText: {
    width: 229,
  },
  titleContent: {
    fontFamily: Fonts.NAME.semiBold,
    fontSize: 24,
    fontWeight: '600',
    color: '#321C1C',
  },
  closeLogo: {
    position: 'relative',
    top: 8,
    left: 0.078 * width,
  },
  textInputContainer: {
    marginTop: 45,
    borderColor: '#968989',
    borderBottomWidth: 0.5,
    paddingBottom: Dimens.space,
    width: 0.74 * width,
  },
  firstName: {
    fontFamily: Fonts.NAME.semiBold,
    fontSize: 14,
    lineHeight: 25,
    color: '#968989',
    alignItems: 'center',
  },
  buttonContainer: {
    height: 56,
    backgroundColor: '#968989',
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 31,
  },
  textButton: {
    fontFamily: Fonts.NAME.semiBold,
    fontSize: 16,
    lineHeight: 24,
    color: '#FFFFFF',
    display: 'flex',
  },
  textHeader: {
    fontFamily: `${FONT_FAMILY_GROUP.Group2}-Regular`,
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.48,
    color: '#321C1C',
  },
  scrollPicker: {
    marginTop: 25,
  },
  scrollPickerText: {
    marginTop: Dimens.space,
    fontFamily: Fonts.NAME.semiBold,
    fontSize: 14,
    lineHeight: 21,
    color: '#321C1C',
    alignItems: 'center',
  },
  buttonContainer: {
    height: 56,
    backgroundColor: '#968989',
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 31,
  },
  textButton: {
    fontFamily: Fonts.NAME.semiBold,
    fontSize: 16,
    lineHeight: 24,
    color: '#FFFFFF',
    display: 'flex',
  },
  rulerContainer: {
    alignItems: 'center',
    marginTop: Dimens.space,
  },
  rulerValue: {
    fontFamily: Fonts.NAME.semiBold,
    fontSize: 24,
    alignSelf: 'center',
    lineHeight: 30,
    color: '#321C1C',
  },
});
