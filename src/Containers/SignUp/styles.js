import Dimens from '../../Styles/Dimens';
import Fonts from '../../Styles/Fonts';
import { Dimensions, StyleSheet } from 'react-native';
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Dimens.space * 2,
    backgroundColor: 'rgba(181, 176, 163, 0.4)',
  },
  titleContainer: {
    flexDirection: 'row',
  },
  titleContainerText: {
    flex: 1,
  },
  titleContent: {
    fontFamily: Fonts.NAME.semiBold,
    fontSize: 24,
    lineHeight: 26,
    color: '#321C1C',
  },
  closeLogo: {
    paddingLeft: Dimens.space,
    paddingBottom: Dimens.space,
  },
  textInputContainer: {
    marginTop: Dimens.space,
    borderColor: '#968989',
    borderBottomWidth: 0.5,
    paddingBottom: 5,
  },
  firstName: {
    fontFamily: Fonts.NAME.semiBold,
    fontSize: 14,
    lineHeight: 25,
    color: '#968989',
    display: 'flex',
    alignItems: 'center',
  },
  showLogo: {
    resizeMode: 'cover',
    alignItems: 'center',
  },
  passWordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonContainer: {
    height: 56,
    backgroundColor: '#968989',
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 56,
  },
  textButton: {
    fontFamily: Fonts.NAME.semiBold,
    fontSize: 16,
    lineHeight: 24,
    color: '#FFFFFF',
  },
  textTouch: {
    fontWeight: 'bold',
    fontSize: 13,
    lineHeight: 16,
    textAlign: 'center',
    alignItems: 'center',
    letterSpacing: 1 / 16,
    color: '#321C1C',
    display: 'flex',
    marginTop: 32,
  },
});
export default styles;
