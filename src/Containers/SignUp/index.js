import RouteNames from '../../Navigators/RouteNames';
import React from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';
import styles from './styles';

const SignUp = ({ navigation, route }) => {
  const [value, onChangeText] = React.useState('');

  return (
    <ImageBackground
      source={require('../../Assets/Images/backgroundSignUp.png')}
      style={styles.container}
      resizeMode="cover"
      blurRadius={7}
      imageStyle={{ opacity: 0.8 }}
    >
      <View style={styles.titleContainer}>
        <Text style={[styles.titleContainerText, styles.titleContent]}>
          Sign up now and get{'\n'}access to 3 Premium courses!
        </Text>
        <Pressable
          style={styles.closeLogo}
          onPress={() => navigation?.goBack()}
        >
          <Image source={require('../../Assets/Images/Vector.png')} />
        </Pressable>
      </View>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.firstName}
          placeholder="First Name"
          onChangeText={(text) => onChangeText(text)}
        />
      </View>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.firstName}
          placeholder="Last Name"
          onChangeText={(text) => onChangeText(text)}
        />
      </View>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.firstName}
          placeholder="Email Address"
          onChangeText={(text) => onChangeText(text)}
        />
      </View>
      <View style={[styles.textInputContainer, styles.passWordContainer]}>
        <TextInput
          style={[styles.firstName, { flex: 1 }]}
          placeholder="Password"
          onChangeText={(text) => onChangeText(text)}
        />
        <Image
          style={styles.showLogo}
          source={require('../../Assets/Images/Show.png')}
        />
      </View>
      <Pressable
        style={styles.buttonContainer}
        onPress={() => navigation?.navigate(RouteNames.PersonalInformation)}
      >
        <Text style={styles.textButton}>Set up</Text>
      </Pressable>
      <Text style={styles.textTouch}>Terms of Use and Privacy Policy</Text>
    </ImageBackground>
  );
};
export default SignUp;
