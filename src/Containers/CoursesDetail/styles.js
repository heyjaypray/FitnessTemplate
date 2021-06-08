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
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  iconHeader: {
    flexDirection: 'row',
  },
  imgageBackgorund: {
    flex: 1,
  },
  userFollower: {
    marginTop: Dimens.space / 2,
  },
  detail: {
    marginTop: height / 4,
  },
  titleText: {
    fontFamily: Fonts.NAME.semiBold,
    fontSize: 40,
    lineHeight: 50,
    color: '#FFFFFF',
    marginTop: Dimens.space / 2,
  },
  filterContainer: {
    paddingVertical: Dimens.space / 2,
  },
  item: {
    borderWidth: 1,
    borderColor: '#333',
    backgroundColor: '#FFF',
    borderRadius: 20,
    borderColor: '#968989',
  },
  labelTag: {
    fontSize: 13,
    fontFamily: FONT_FAMILY_GROUP.Group2,
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
    flexDirection: 'column',
    margin: Dimens.space / 4,
  },
  imgageBackgorund1: {
    height: imgHeight,
    resizeMode: 'cover',
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
  imageFollow: {
    fontFamily: 'Lato-Regular',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.48,
    color: '#FFFFFF',
    textShadowColor: '0px 0px 4px rgba(0, 0, 0, 0.15)',
  },
  tag: {
    left: Dimens.space / 2,
    bottom: Dimens.space / 2,
    position: 'absolute',
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
    marginRight: 32,
  },
});
