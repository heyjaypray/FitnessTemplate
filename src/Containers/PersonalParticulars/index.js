import React from 'react';
import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  Dimensions,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Switch,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {LinearGradient} from 'expo-linear-gradient';
// import { TextInput } from 'react-native-gesture-handler';
import LineGauge from 'react-native-line-gauge';

const { width, height } = Dimensions.get('window');

const PersonalParticulars = ({ navigation }) => {
  const [tall, setTall] = React.useState(150);
  const [weight, setWeight] = React.useState(55);
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Image
            style={styles.closeLogo}
            source={require('../../Assets/Images/iconBack.png')}
          />
        </TouchableOpacity>
        <View style={styles.setting}>
          <Text style={styles.settingText}>Personal Particulars</Text>
        </View>
      </View>
      {/* <ScrollView style={{flex: 1,}} showsVerticalScrollIndicator={false}> */}
      <View style={styles.scrollPicker}>
        <Text style={styles.scrollPickerText}>Height (cm)</Text>
        <View style={styles.rulerContainer}>
          <Text style={styles.rulerValue}>{tall}</Text>
          <LineGauge min={0} max={200} value={tall} onChange={setTall} />
        </View>
      </View>
      <View style={styles.scrollPicker}>
        <Text style={styles.scrollPickerText}>Weight (kg)</Text>
        <View style={styles.rulerContainer}>
          <Text style={styles.rulerValue}>{weight}</Text>
          <LineGauge min={0} max={200} value={weight} onChange={setWeight} />
        </View>
      </View>
      <View style={styles.button}>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.textButton}>Update</Text>
        </TouchableOpacity>
      </View>

      {/* </ScrollView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: StatusBar.currentHeight + 20,
    paddingHorizontal: 24,
  },
  header: {
    flexDirection: 'row',
  },
  backButton: {
    width: 12,
    height: 12,
  },
  setting: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingText: {
    fontFamily: 'SourceSerifPro-SemiBold',
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 27,
    color: '#321C1C',
    letterSpacing: 0.16,
  },
  card: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 8,
    marginTop: 16,
  },
  cardContent: {
    flex: 1,
  },
  cartTitle: {
    fontFamily: 'SourceSerifPro-SemiBold',
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 27,
    color: '#FFFFFF',
    letterSpacing: 0.16,
  },
  scrollPicker: {
    marginTop: 25,
  },
  scrollPickerText: {
    fontFamily: 'SourceSerifPro-SemiBold',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 21,
    color: '#321C1C',
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    position: 'absolute',
    width: width,
    height: 56,
    top: 0.86 * height,
    // top: 100,
    // paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: 279,
    height: 56,
    backgroundColor: '#968989',
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 31,
  },
  textButton: {
    fontFamily: 'SourceSerifPro-SemiBold',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    color: '#FFFFFF',
    display: 'flex',
  },
  rulerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    //   marginHorizontal: 24,
  },
  rulerValue: {
    fontFamily: 'SourceSerifPro-SemiBold',
    fontWeight: '600',
    fontSize: 24,
    lineHeight: 30,
    color: '#321C1C',
    // marginLeft: 50,
  },
});
export default PersonalParticulars;
