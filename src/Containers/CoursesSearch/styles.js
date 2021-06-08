import Dimens from '../../Styles/Dimens';
import Fonts, { FONT_FAMILY_GROUP } from '../../Styles/Fonts';
import { Image, StyleSheet } from 'react-native';
const { width, height } = Dimens.screenSize;
const { height: imgHeight, scale, width: imgWidth } = Image.resolveAssetSource(
  require('../../Assets/Images/img3.png'),
);
export default StyleSheet.create({
  container: {
    flex: 1,
    padding: Dimens.space,
  },
  header: {
    marginBottom: Dimens.space,
  },
  iconHeader: {
    flexDirection: 'row',
  },
  titleText: {
    fontFamily: Fonts.NAME.semiBold,
    fontSize: 40,
    lineHeight: 50,
    color: '#321C1C',
    marginTop: Dimens.space / 2,
  },
  filterContainer: {
    marginVertical: Dimens.space / 4,
  },
  item: {
    borderWidth: 1,
    borderColor: '#333',
    backgroundColor: '#FFF',
    borderRadius: 20,
    borderColor: '#968989',
  },
  labelTag: {
    color: '#968989',
  },
  itemSelected: {
    backgroundColor: '#321C1C',
  },
  labelSelected: {
    color: '#FFFFFF',
  },
  // -------------------------
  flatList: {},
  inlineContainer: {
    flex: 1,
    margin: Dimens.space / 4,
    flexDirection: 'column',
  },
  imgageBackgorund1: {
    width: imgWidth,
    aspectRatio: 1,
    resizeMode: 'stretch',
  },
  cardDescription: {
    marginLeft: 16,
    marginTop: 16,
  },
  imageTitle: {
    fontFamily: Fonts.NAME.semiBold,
    fontSize: 20,
    lineHeight: 27,
    letterSpacing: 0.16,
    color: '#FFFFFF',
    textShadowColor: '0px 0px 4px rgba(0, 0, 0, 0.15)',
  },
  label: {
    fontFamily: Fonts.NAME.semiBold,
    fontSize: 20,
    lineHeight: 27,
    color: '#321C1C',
    letterSpacing: 0.16,
    flex: 1,
  },

  textInputContainer: {
    borderColor: '#321C1C',
    borderBottomWidth: 0.5,
    paddingBottom: Dimens.space / 2,
  },
  firstName: {
    fontFamily: Fonts.NAME.semiBold,
    fontSize: 24,
    lineHeight: 38,
    color: '#321C1C',
    display: 'flex',
    alignItems: 'center',
  },
  textFLatlist: {
    fontFamily: Fonts.NAME.semiBold,
    fontSize: 20,
    lineHeight: 27,
    letterSpacing: 0.16,
    color: '#321C1C',
  },
  boxTextPopular: {
    marginVertical: Dimens.space / 2,
  },
});
