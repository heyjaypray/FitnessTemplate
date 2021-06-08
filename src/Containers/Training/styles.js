import Dimens from '../../Styles/Dimens';
import Fonts, { FONT_FAMILY_GROUP } from '../../Styles/Fonts';
import { StyleSheet } from 'react-native';
const { width, height } = Dimens.screenSize;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    paddingBottom: Dimens.space,
  },
  imgageBackgorund: {
    flex: 1,
  },
  scrollViewContainer: {
    paddingHorizontal: Dimens.space,
  },
  avatar: {
    marginTop: 4,
    marginRight: 30,
  },
  search: {},
  toast: {},
  contentCotainer: {
    marginTop: 2 * Dimens.space,
  },
  header: {
    flexDirection: 'row',
    marginTop: 4,
    paddingVertical: 10,
  },
  contentCotainer1: {},
  titleContainer: {
    marginBottom: 96,
  },
  title: {
    fontFamily: Fonts.NAME.semiBold,
    fontSize: 24,
    lineHeight: 30,
    color: '#FFFFFF',
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontFamily: Fonts.NAME.semiBold,
    fontSize: 20,
    lineHeight: 27,
    color: '#321C1C',
    letterSpacing: 0.16,
    flex: 1,
  },
  viewALl: {
    fontFamily: FONT_FAMILY_GROUP.Group2,
    fontWeight: 'normal',
    letterSpacing: 0.32,
    fontSize: 13,
    lineHeight: 16,
    color: '#FFFFFF',
  },
  inlineContainer: {
    flexDirection: 'row',
    marginTop: 24,
  },
  inlineContainer1: {
    marginTop: 24,
  },
  imgageBackgorund1: {
    width: 0.448 * width,
    height: 0.29 * height,
    resizeMode: 'cover',
    paddingHorizontal: Dimens.space / 2,
  },
  imgageBackgorund2: {
    height: 200,
  },
  cardDescription: {},
  imageTitle: {
    fontFamily: Fonts.NAME.semiBold,
    fontSize: 20,
    lineHeight: 27,
    letterSpacing: 0.16,
    color: '#FFFFFF',
    textShadowColor: '0px 0px 4px rgba(0, 0, 0, 0.15)',
  },
  imageFollow: {
    fontFamily: FONT_FAMILY_GROUP.Group2,
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.48,
    color: '#FFFFFF',
    textShadowColor: '0px 0px 4px rgba(0, 0, 0, 0.15)',
  },
  tag: {
    left: 16,
    top: 113,
  },
  //   ------------------
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    width: 327,
    height: 380,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    borderWidth: 1,
    borderColor: '#A48F71',
    borderRadius: 20,
    height: 37,
    width: 199,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 16,
  },
  textStyle: {
    fontFamily: 'SourceSerifPro-Regular',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 21,
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    color: '#A48F71',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  prompt: {
    borderRadius: 8,
  },
  promptTitle: {
    fontFamily: 'SourceSerifPro-Regular',
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 27,
    letterSpacing: 0.16,
    textAlign: 'center',
    color: '#A48F71',
    marginTop: 24,
  },
  promptContent: {
    fontFamily: 'Lato-Regular',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.48,
    textAlign: 'center',
    color: '#321C1C',
    paddingHorizontal: 40,
    marginTop: 8,
  },
  close: {
    position: 'absolute',
    top: 15,
    left: '90%',
  },
  closeLogo: {
    resizeMode: 'cover',
  },
  //   -----------------------
  percentContainer: {
    position: 'absolute',
    bottom: Dimens.space / 2,
    left: Dimens.space / 2,
  },
  percent: {
    fontSize: 13,
    color: '#ffffff',
  },
});
