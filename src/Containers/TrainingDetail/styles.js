import Dimens from '../../Styles/Dimens';
import Fonts, { FONT_FAMILY_GROUP } from '../../Styles/Fonts';
import { StyleSheet } from 'react-native';

const { width, height } = Dimens.screenSize;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Dimens.space,
  },
  imgageBackgorund: {
    flex: 1,
  },
  header: {},
  iconHeader: {
    flexDirection: 'row',
  },
  titleText: {
    fontFamily: Fonts.NAME.semiBold,
    fontSize: 40,
    lineHeight: 50,
    color: '#FFFFFF',
    marginTop: Dimens.space / 2,
  },
  filterContainer: {
    marginTop: 12,
    paddingHorizontal: 24,
  },
  item: {
    borderWidth: 1,
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
  flatList: {
    marginTop: 5,
    // backgroundColor: 'red',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  inlineContainer: {
    // flex: 1,
    flexDirection: 'column',
    marginRight: 20,
    marginTop: 30,
    width: 168,
    height: 240,
  },
  imgageBackgorund1: {
    width: 0.4 * width,
    height: 0.29 * height,
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
    left: 16,
    top: 113,
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
  buttonContainer: {
    width: Dimens.screenSize.width,
    height: '30%',
  },
  backBackground: {
    width: Dimens.screenSize.width,
    height: '40%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -100,
  },
});
