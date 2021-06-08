import Fonts from '../../Styles/Fonts';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: '#968989',
    fontSize: 14,
    fontWeight: 'bold',
  },
  textInput: {
    color: '#321C1C',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    fontFamily: Fonts.NAME.default,
  },
  boxInput: { borderColor: '#968989' },
});
export default styles;
