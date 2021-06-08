import React from 'react';
import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import LineGauge from 'react-native-line-gauge';
import styles from './styles';
import Ruler from 'react-native-animated-ruler';
import Fonts from '../../Styles/Fonts';
import images from '../../Assets';
import RouteNames from '../../Navigators/RouteNames';

const { width, height } = Dimensions.get('window');

const PersonalInformation = ({ navigation, route }) => {
  const [value, onChangeText] = React.useState('');
  const [tall, setTall] = React.useState(150);
  const [weight, setWeight] = React.useState(55);

  return (
    <ImageBackground
      source={require('../../Assets/Images/backgroundSignUp.png')}
      style={styles.container}
      resizeMode="cover"
      blurRadius={7}
      imageStyle={{ opacity: 0.8 }}
    >
      <View style={{ width: width, height: '100%', paddingHorizontal: 48 }}>
        <StatusBar translucent backgroundColor="transparent" />
        <View style={styles.titleContainer}>
          <View style={styles.titleContainerText}>
            <Text style={styles.titleContent}>Almost there!</Text>
          </View>
          <Pressable onPress={navigation?.goBack}>
            <Image style={styles.closeLogo} source={images.ic_close} />
          </Pressable>
        </View>
        <Text style={styles.textHeader}>Tell us more about yourself</Text>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.firstName}
            placeholder={'Date of Birth'}
            onChangeText={(text) => onChangeText(text)}
            value={value}
          />
        </View>
        <View style={styles.scrollPicker}>
          <Text style={styles.scrollPickerText}>Height (cm)</Text>
          <View style={styles.rulerContainer}>
            <Ruler
              style={{}}
              width={width - 100}
              height={70}
              vertical={false}
              onChangeValue={setTall}
              value={tall}
              minimum={10}
              maximum={300}
              segmentSpacing={10}
              segmentWidth={1}
              indicatorColor="#321C1C"
              indicatorWidth={100}
              indicatorHeight={40}
              indicatorBottom={0}
              step={5}
              stepColor="#968989"
              stepHeight={40}
              normalColor="#968989"
              normalHeight={20}
              backgroundColor="transparent"
              numberFontFamily={Fonts.NAME.semiBold}
              numberSize={24}
              numberColor="#000000"
              unit="cm"
              unitBottom={12}
              unitFontFamily={Fonts.NAME.semiBold}
              unitColor="#321C1C"
              unitSize={16}
            />
          </View>
        </View>
        <View style={styles.scrollPicker}>
          <Text style={styles.scrollPickerText}>Weight (kg)</Text>
          <View style={styles.rulerContainer}>
            <Ruler
              style={{}}
              width={width - 100}
              height={70}
              vertical={false}
              onChangeValue={setTall}
              minimum={10}
              maximum={300}
              segmentSpacing={10}
              segmentWidth={1}
              indicatorColor="#321C1C"
              indicatorWidth={100}
              indicatorHeight={40}
              indicatorBottom={0}
              step={5}
              stepColor="#968989"
              stepHeight={40}
              normalColor="#968989"
              normalHeight={20}
              backgroundColor="transparent"
              numberFontFamily={Fonts.NAME.semiBold}
              numberSize={24}
              numberColor="#000000"
              unit="kg"
              unitBottom={12}
              unitFontFamily={Fonts.NAME.semiBold}
              unitColor="#321C1C"
              unitSize={16}
            />
          </View>
        </View>
        <View style={styles.button}>
          <Pressable
            style={styles.buttonContainer}
            onPress={() => navigation?.navigate(RouteNames.RootApp)}
          >
            <Text style={styles.textButton}>Complete</Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
};

export default PersonalInformation;
