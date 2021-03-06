import { StyleSheet } from 'react-native';
import Dimens from '../../Styles/Dimens';
const { width, height } = Dimens.screenSize;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  header: {
    padding: Dimens.space,
  },
  settingButton: {
    alignItems: 'flex-end',
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
  nickName: {
    fontFamily: 'SourceSerifPro-SemiBold',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    color: '#321C1C',
    marginTop: 8,
  },
  levelContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 18,
  },
  levelButton: {
    borderRadius: 16,
    backgroundColor: '#A48F71',
    width: 68,
    height: 21,
    alignItems: 'center',
    justifyContent: 'center',
  },
  level: {
    fontFamily: 'Lato-Regular',
    fontWeight: '500',
    fontSize: 11,
    lineHeight: 13,
    color: '#FFFFFF',
    display: 'flex',
  },
  inforContainer: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberInforContainer: {
    flexDirection: 'row',
    marginTop: 32,
    justifyContent: 'center',
  },
  numberInfor: {
    fontFamily: 'SourceSerifPro-SemiBold',
    fontWeight: '600',
    fontSize: 24,
    lineHeight: 30,
    color: '#A48F71',
  },
  textInfor: {
    fontFamily: 'Lato-Regular',
    fontWeight: 'normal',
    fontSize: 11,
    lineHeight: 13,
    color: '#A48F71',
    letterSpacing: 0.32,
  },
  inforContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  //   ---------------------------
  bottom: {
    flex: 4,
    backgroundColor: '#FFFFFF',
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    alignItems: 'center',
  },
  thisWeek: {
    fontFamily: 'SourceSerifPro-SemiBold',
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 27,
    color: '#321C1C',
    letterSpacing: 0.16,
    marginTop: 22,
  },
  // --------------------------------
  section: {
    height: 60,
    width: '60%',
    marginBottom: 20,
  },
  date: {
    flex: 1,
  },
  // ------------------
  item: {
    borderWidth: 1,
    borderColor: '#333',
    backgroundColor: '#FFF',
    borderRadius: 20,
    borderColor: '#968989',
    paddingVertical: 5,
    paddingHorizontal: Dimens.space / 2,
    justifyContent: 'center',
    alignItems: 'center',
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
  textDate: {
    fontFamily: 'Lato-Regular',
    fontWeight: 'normal',
    fontSize: 11,
    lineHeight: 13,
    color: '#321C1C',
    letterSpacing: 0.32,
  },
  containerList: {
    width: width,
    paddingHorizontal: 40,
  },
  listContainer: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderColor: '#E2E2E2',
    paddingBottom: 16,
    marginTop: 16,
  },
  listTitle: {
    flex: 1,
    marginLeft: 8,
  },
  listTitleText: {
    fontFamily: 'Lato-Regular',
    fontWeight: 'normal',
    fontSize: 13,
    lineHeight: 16,
    color: '#321C1C',
    letterSpacing: 0.32,
  },
  listTitleText1: {
    fontFamily: 'Lato-Regular',
    fontWeight: 'normal',
    fontSize: 11,
    lineHeight: 13,
    color: '#DCAFA1',
    letterSpacing: 0.32,
  },
  listTitleNumber: {
    fontFamily: 'Lato-Regular',
    fontWeight: 'normal',
    fontSize: 13,
    lineHeight: 16,
    color: '#DF5656',
    letterSpacing: 0.32,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 32,
    marginBottom: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logOutText: {
    fontFamily: 'SourceSerifPro-SemiBold',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 21,
    color: '#321C1C',
  },
  buttonLogOut: {
    borderWidth: 1,
    borderColor: '#968989',
    borderRadius: 20,
    width: 137,
    height: 37,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
